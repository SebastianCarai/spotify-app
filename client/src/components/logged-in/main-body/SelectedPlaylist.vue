<template>
    <div class="selected-playlist-body">
        <div class="top">
            <ProfileButton />
            
            <div class="playlist-details">
                <div 
                    class="playlist-image" 
                    :style="{'background-image': 'url(' + $store.state.activePlaylist.images[0].url + ')'}"
                >
                    <!-- <img 
                        :src="$store.state.activePlaylist.images[0].url" 
                        alt="Playlist Image"
                    > -->
                </div>
                <div class="text-block">
                    <span>Public Playlist</span>
                    <h1>{{$store.state.activePlaylist.name}}</h1>
                </div>
            </div>
        </div>

        <!-- List of Songs -->
        <ul>
            <li v-for="(track, index) in $store.state.activePlaylist.songs" :key="index" class="mb-4">
                <div>
                    <img :src="track.track.album.images[0].url" :alt="track.track.album.name" class="album-cover">
                    <h4 class="d-inline-block">{{track.track.name}}</h4>
                </div>
                <i>{{track.track.artists[0].name}}</i> - 
                <i>{{track.track.album.name}}</i>
            </li>
        </ul>
    </div>
</template>

<script>
import ProfileButton from './ProfileButton.vue'

export default {
    name: 'SelectedPlaylist',
    components: {ProfileButton},
    created(){
        console.log(this.$store.state.activePlaylist);
    }
}
</script>

<style lang="scss" scoped>
.top{
    background: linear-gradient(0deg,#707070, 	#9a9a9a);
}
.playlist-details{
    display: flex;
    align-items: center;
    padding: 30px 50px;
    & .playlist-image{
        width: 250px;
        height: 250px;
        background-size: cover;
        background-repeat: no-repeat;
    }
    & .text-block{
        margin-left: 25px;
        span{
            font-size: 12px;
            text-transform: uppercase;
        }
        h1{
            font-size: 70px;
            font-weight: bold;
        }
    }
}

ul{
    padding: 60px;
    list-style-type: none;
    li .album-cover{
        display: inline-block;
        width: 70px;
        height: 70px;
    }
}
</style>