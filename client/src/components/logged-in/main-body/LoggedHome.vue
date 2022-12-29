<template>
    <div>
        <ProfileButton />
        <h1>Logged Home</h1>
    </div>
</template>

<script>
import ProfileButton from './ProfileButton.vue'

export default {
    name: 'LoggedHome',
    components: {ProfileButton}
}
</script>