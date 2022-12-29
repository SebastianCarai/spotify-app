<template>
    <div class="top-banner">
        <!-- PROFILE BUTTON -->
        <div class="profile-btn">
            <div class="img-container">
                <img :src="$store.state.profilePicture" alt="Profile Picture">
            </div>
            {{ $store.state.userName }}
            <i class="fa-solid fa-caret-down mx-2"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileButton'
}
</script>

<style lang="scss" scoped>
.top-banner{
    padding: 10px 30px;
    display: flex;
    justify-content: flex-end;
    .profile-btn{
        height: 35px;
        border: 1px solid white;
        display: flex;
        align-items: center;
        border-radius: 24px;
        padding: 2px 5px;
        cursor: pointer;
        font-size: 13px;
        font-weight: bold;
        &:hover{
            background-color: rgba($color: #ffffff, $alpha: 0.1)
        }
        .img-container{
            height: 100%;
            border-radius: 100%;
            overflow: hidden;
            margin-right: 10px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        i{
            font-size: 18px;
        }
    }
}
</style>