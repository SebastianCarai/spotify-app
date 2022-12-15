<template>
    <div>
        <h1>User is logged in</h1>
        
        <button @click="spotify.logout()">Logout</button>
    </div>
</template>

<script>
import spotify from '../spotify';

export default {

    data(){
        return{
            queryParams: this.$route.query,
            spotify: spotify
        }
    },
    created(){
        if('access_token' in this.queryParams && 'refresh_token' in this.queryParams && 'expires_in' in this.queryParams){
            spotify.login();
            this.$router.push('/me');
        }else if(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken') && localStorage.getItem('expiresIn')){
            this.$router.push('/me');
        }else{
            this.$router.push('/')
        }
    }
}
</script>