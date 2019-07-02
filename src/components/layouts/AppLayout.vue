<template>
    <div>
        <sidebar/>
        <div class="main-panel">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./Sidebar";
    export default {
        name: "AppLayout",
        components: {Sidebar}
    }
</script>

<style scoped>

</style>