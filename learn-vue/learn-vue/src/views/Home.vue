<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import '../../public/home.css'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
@import '../../public/home.css';
</style>


