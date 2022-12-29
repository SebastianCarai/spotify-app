<template>
    <div class="main_body">
        <!-- If user clicked a playlist -->
        <div v-if="$store.state.activePlaylist">
            <SelectedPlaylist />
        </div>

        <!-- If user hasn't clicked a playlist show the HomePage -->
        <div v-else>
            <LoggedHome />
        </div>

        <button @click="spotify.logout()" class="btn btn-danger">Logout</button>
        <button @click="checkState">Check State</button>
    </div>
</template>

<script>
import spotify from '../../spotify';
import LoggedHome from '../logged-in/main-body/LoggedHome.vue'
import SelectedPlaylist from '../logged-in/main-body/SelectedPlaylist.vue'

export default {
    name: 'MainBody',
    components: {LoggedHome, SelectedPlaylist},
    data(){
        return{
            spotify: spotify,
        }
    },
    methods:{
        checkState(){
            console.log(this.$store.state.activePlaylist.songs);
        }
    }
}
</script>

<style lang="scss" scoped>
.main_body{
    background-color: #121212;
    height: inherit;
    overflow: visible;
    overflow-y: auto;
}
</style>