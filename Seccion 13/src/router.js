import { createRouter, createWebHistory } from "vue-router";

import TeamList from "./components/teams/TeamsList.vue";
import UserList from "./components/users/UsersList.vue"
import TeamMembers from "./components/teams/TeamMembers.vue"
import NotFound from "./components/nav/NotFound.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", redirect: "/teams"},
        {path: "/teams", component: TeamList, children: [{path: ":teamId", component: TeamMembers, props: true}]},
        {path: "/users", component: UserList},
        {path: "/:notFound(.*)", component: NotFound}
    ],
    linkActiveClass: "active",
    scrollBehavior(_, _2, savePosition){
        if(savePosition){
            return savePosition;
        }
        return {left: 0, top: 0}
    }
});

router.beforeEach(function(to, from, next){
    console.log(to, from);
    next();
});

export default router;