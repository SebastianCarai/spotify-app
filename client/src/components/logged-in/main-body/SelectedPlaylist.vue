<template>
    <div class="selected-playlist-body">
        <div class="top">
            <ProfileButton />
            
            <div class="playlist-details">
                <!-- Playlist image (is set as background image of a div) -->
                <div 
                    class="playlist-image" 
                    :style="{'background-image': 'url(' + $store.state.activePlaylist.images[0].url + ')'}"
                >
                </div>

                <!-- Text Right to the Playlist IMage -->
                <div class="text-block">
                    <span class="playlist_type">Public Playlist</span>
                    <h1>{{$store.state.activePlaylist.name}}</h1>

                    <div class="playlist_details">
                        <div class="playlist_author">
                            {{$store.state.activePlaylist.owner.display_name}}
                        </div>
                        <div class="dot"></div>
                        <div class="playlist_length">
                            {{$store.state.activePlaylist.songs.length}} songs,
                        </div>
                        <div class="playlist_duration">
                            {{ $store.state.activePlaylist.duration }}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- List of Songs -->
        <ul>
            <li v-for="(track, index) in $store.state.activePlaylist.songs" :key="index" class="mb-4">
                <div class="song_grid" @click="getImageColor()">
                    <div class="n_of_song"> {{ index + 1 }}</div>

                    <!-- Album cover, song name, song artist -->
                    <div class="song_block">
                        <div>
                            <img :src="track.track.album.images[0].url" :alt="track.track.album.name" class="album-cover">
                        </div>
                        <div>
                            <div>{{track.track.name}}</div>
                            <div class="text_gray artist">{{track.track.artists[0].name}}</div>
                        </div>
                    </div>
                    
                    <div class="text_gray song_album">{{track.track.album.name}}</div>
                    <div class="text_gray date_added">{{setAdditionTime(track.added_at)}}</div>
                    <div class="text_gray song_duration">{{track.duration}}</div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
import ProfileButton from './ProfileButton.vue'

export default {
    name: 'SelectedPlaylist',
    components: {ProfileButton},
    methods:{
        setAdditionTime(rawDate){
            const date = new Date(rawDate);
            return date.toDateString()
        }
    },
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
        margin-top: 50px;
        span.playlist_type{
            font-size: 12px;
            text-transform: uppercase;
        }
        h1{
            font-size: 90px;
            font-weight: bold;
        }
        .playlist_details{
            margin-top: 20px;
            display: flex;
            align-items: center;
            font-size: 14px;
            .playlist_author{
                font-weight: 800;
            }
            .dot{
                width: 5px;
                height: 5px;
                background-color: white;
                border-radius: 100%;
                margin: 0 5px;
            }
            .playlist_duration{
                color: #c1c1c1;
                margin-left: 10px;
            }
        }
    }
}

ul{
    padding: 60px;
    list-style-type: none;
    li {
        .song_grid{
            display: flex;
            align-items: center;
            .n_of_song{
                min-width: 4%;
                text-align: center;
            }
            .text_gray{
                opacity: 70%;
                font-size: 14px;
            }
            .song_block{
                width: 40%;
                display: flex;
                font-size: 15px;
                .album-cover{
                    margin-right: 15px;
                    width: 50px;
                    height: 50px;
                }
                .artist:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            .song_album{
                width: 24%;
            }
            .date_added{
                width: 24%;
            }
            .song_duration{
                width: 8%;
            }
        }
    }
}

</style>