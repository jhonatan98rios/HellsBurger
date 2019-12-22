<template>
  <div id="app">
    <Splash/>
    <Header />
    <router-view @add-to-bag="addtoBag" ></router-view>
    <BagView card />
    <Footer/>
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import Header from './components/Header.vue'
import BagView from './components/BagView.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Splash,
    Header,
    BagView,
    Footer
  },

  data(){
    return{
      bag:{
        price: null
      }
    }
  },

  methods:{
    addtoBag: function(id){
      console.log(id)
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
</style>
