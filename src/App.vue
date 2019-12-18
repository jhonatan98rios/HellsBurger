<template>
  <div id="app">
    <Splash/>
    <Header />
    <Navbar />
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Splash,
    Header,
    Navbar,
    Home,
    Footer
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
</style>
