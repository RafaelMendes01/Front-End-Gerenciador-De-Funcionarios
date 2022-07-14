<template>
 <div class="dashboard-container flex flex-column">
    <vue-navbar/>
    <router-view></router-view>
 </div>
</template>

<script>
import NavBar from '../components/navigation/NavBar.vue'
export default {
    components:{
        'vue-navbar': NavBar,
    },
}
</script>

<style scoped>
.dashboard-container{
    background-color: #010518;
    height: 100vh;
}
</style>