<template>
    <div class="main_body">
        <button @click="spotify.logout()" class="btn btn-danger">Logout</button>
    </div>
</template>

<script>
import spotify from '../../spotify';

export default {
    name: 'MainBody',
    data(){
        return{
            spotify: spotify
        }
    }
}
</script>

<style lang="scss" scoped>
.main_body{
    background-color: #121212;
    height: inherit;
    overflow: visible;
}
</style>