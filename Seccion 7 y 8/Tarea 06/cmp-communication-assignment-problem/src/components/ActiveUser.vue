<template>
    <ul>
        <li>
            <h2>Username: {{user.username}}</h2>
             <h3>Age: {{user.age}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: ["user"]
}
</script>