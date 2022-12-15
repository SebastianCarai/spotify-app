<template>
  <main>
      <a href="http://localhost:8888/login">Login</a>
  </main>
</template>

<script>
export default {
  data(){
    return{
      store: this.$store.state
    }
  },
  methods:{
  },
  created(){

    // If user is logged in redirect him directly to the /me route
    if(localStorage.getItem('accessToken')){
      window.location.replace('http://localhost:8080/me');
    }
  }
}
</script>
