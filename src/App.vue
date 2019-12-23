<template>
  <div id="app">
    <Splash />
    <Login @is-logged="login" />
    <Header />
    <router-view @add-to-bag="addtoBag" :userData="userData" />
    <BagView :bagContent="bagContent" />
    <Footer :isLogged="isLogged" />
  </div>
</template>

<script>
import Splash from './views/Splash.vue'
import Login from './views/Login.vue'
import Header from './components/Header.vue'
import BagView from './components/BagView.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Splash,
    Login,
    Header,
    BagView,
    Footer
  },

  data(){
    return{
      bagContent:{
        price: null
      },
      isLogged: false,
      userData: null
    }
  },

  methods:{
    addtoBag: function(id){
      console.log(id)
      this.bagContent.price += id
    },

    login: function(val){
      this.isLogged = true
      this.userData = val
      console.log(this.userData)
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
</style>
