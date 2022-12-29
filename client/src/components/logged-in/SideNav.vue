<template>
    <div class="side_nav">
        <TopPart />
        <hr>
        <Playlists />
    </div>
</template>

<script>
import TopPart from './side-nav/TopPart.vue';
import Playlists from './side-nav/Playlists.vue';
import axios from 'axios';

export default {
    name: 'SideNav',
    components:{TopPart, Playlists},
}
</script>

<style lang="scss">
.side_nav{
    background-color: #000000;
    height: inherit;
    padding: 20px;
    overflow: hidden;
}
</style>