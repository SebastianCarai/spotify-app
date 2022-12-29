<template>
    <div class="playlists-container">
        <div>
        <ul>
            <li 
                v-for="(playlist, index) in playlistsInfo" 
                :key="index" 
                class="playlist"
                @click="displayPlaylistSongs(playlist)"
            >
                {{playlist.name}}
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Playlists',
    data(){
        return{
            baseUrl: 'https://api.spotify.com/v1',
            headers: {
                'content-type' : 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            },
            accessToken: null,
            playlistsInfo: null,
            playlistsAndTracks: []
        }
    },
    methods: {
        // Function that saves all the user's Playlists in a variable
        getPlaylists(){
            // Get user's Playlists save them 
            axios.get(this.baseUrl + '/me/playlists', {
                headers: this.headers
            })
            // Save playlists details (name, id, img ecc..)
            .then((response) => {
                this.playlistsInfo = response.data.items;
            })
        },
        // Display songs
        displayPlaylistSongs(clickedPlaylist){
            // If the playlist doesn't have tracks saved,
            // make an API call and save tracks as a key-value in the object
            if(!clickedPlaylist.songs){
                axios.get(clickedPlaylist.tracks.href,{
                    headers: this.headers
                })
                .then(res => {
                    clickedPlaylist['songs'] = res.data.items;
                    this.$store.commit('setActivePlaylist', clickedPlaylist)
                })
            } else {
                this.$store.commit('setActivePlaylist', clickedPlaylist)
            }
            window.scrollTo(0,0);
        }
    },
    created(){
        this.getPlaylists();
    }
}
</script>

<style lang="scss" scoped>
.playlists-container{
    max-height: 380px;
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    li.playlist{
        margin: 10px 0;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        color: white;
        opacity: 60%;  
        &:hover{
            opacity: 85%;
        }
    }
}
</style>