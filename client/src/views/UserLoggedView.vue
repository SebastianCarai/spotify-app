<template>
    <div class="my_container">
        <div class="flex_container">
             <div class="left_side">
                <vue-resizable :min-width="250" :max-width="350" :active="['r']">
                    <SideNav />
                </vue-resizable>
            </div>
            <div class="right_side">
                <MainBody />
            </div>
        </div>
        <ActionBar />
    </div>
</template>

<script>
import spotify from '../spotify';
import SideNav from '../components/logged-in/SideNav.vue';
import MainBody from '../components/logged-in/MainBody.vue';
import ActionBar from '../components/logged-in/ActionBar.vue';
import VueResizable from 'vue-resizable';
import axios from 'axios'

export default {
    data(){
        return{
            queryParams: this.$route.query,
            spotify: spotify,
        }
    },
    components:{SideNav, MainBody, ActionBar, VueResizable},
    methods:{
        heandleUserLogin(){
            if('access_token' in this.queryParams && 'refresh_token' in this.queryParams && 'expires_in' in this.queryParams){
                spotify.login();
                this.$router.push('/me');
                this.getUserData();
            }else if(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken') && localStorage.getItem('expiresIn')){
                this.$router.push('/me');
                this.getUserData();
            }else{
                this.$router.push('/')
            }
        },
        getUserData(){
            axios.get('https://api.spotify.com/v1/me', {
                headers:{
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            .then(response => {
                this.$store.commit('setUserName', response.data.display_name);
                this.$store.commit('setProfilePicture', response.data.images[0].url);
            })
        },
    },
    created(){
        this.heandleUserLogin();
    }
}
</script>

<style lang="scss" scoped>
.my_container{
    height: 100vh;
    color: white;
    overflow: hidden;
    .flex_container{
    height: calc(100vh - 100px);
    display: flex;
    .left_side{
        height: inherit;
        &::-webkit-resizer {
            height: 100%;
            position: absolute;
}
    }
    .right_side{
        height: inherit;
        flex-grow: 1;
    }
}
}
</style>