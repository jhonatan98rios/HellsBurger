<template>
  <div id="app">
    <Splash/>
    <Header />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Splash,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
</style>
