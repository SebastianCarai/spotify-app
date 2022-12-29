<template>
    <div>
        <!-- | Home - Search - Your Library | -->
        <ul>
            <!-- Home -->
            <li class="top-cta cta" @click="goToHome">
                <i class="fa-solid fa-house"></i> Home
            </li>
            <!-- Search -->
            <li class="top-cta cta">
                <i class="fa-solid fa-magnifying-glass"></i> Search
            </li>
            <!-- Your Library -->
            <li class="top-cta cta">
                <i class="fa-solid fa-book"></i> Your Library
            </li>
        </ul>
        
        <!-- | Create Playlist - Liked Songs | -->
        <ul class="bottom-part">
            <!-- Create Playlist -->
            <li class="bottom-cta cta">
                <div> <i class="fa-solid fa-square-plus create-playlist-icon"></i> </div>
                <div class="bottom-cta-text">Create Playlist</div>
            </li>

            <!-- Liked Songs -->
            <li class="bottom-cta cta">
                <div> <i class="fa-solid fa-heart liked-songs-icon"></i> </div>
                <div class="bottom-cta-text">Liked Songs</div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'TopPart',
    methods: {
        goToHome(){
            this.$store.commit('setActivePlaylist', null)
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    li.cta{
        margin: 15px 0;
        font-weight: 500;
        cursor: pointer;
        color: white;
        opacity: 60%;  
        &:hover{
            opacity: 85%;
        }
    }
    // Home, Search and Your Library BUTTONS
    li.top-cta{
        font-size: 14px;
        // Button icon
        i{
            margin-right: 10px;
            font-size: 20px !important;
        }
    }
    // Create Playlist and Liked Songs BUTTONS
    li.bottom-cta{
        display: flex;
        align-items: center;
        // Icons general features
        & i{
            margin-right: 10px;
            // Plus icon
            &.create-playlist-icon{
                font-size: 25px;
            }
            // Heart icon
            &.liked-songs-icon{
                font-size: 22px;
                color: red;
            }
        }
        // Button text
        .bottom-cta-text{
            font-size: 15px;
        }
    }
}
</style>