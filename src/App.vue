<template>
  <div id="app">
    <Splash />
    <Login @is-logged="login" />
    <Header />
    <router-view @add-to-bag="addtoBag" :userData="userData" :bagContent="bagContent" />
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
import content from '@/mockdata'

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
        price: null,
        products: []
      },
      isLogged: false,
      userData: null,
    }
  },

  methods:{
    addtoBag: function(id){      

      this.contentMap(content.burgers, id)
      this.contentMap(content.sideDishes, id)
      this.contentMap(content.drinks, id)
      this.contentMap(content.candys, id)
    },

    contentMap: function(content, id){
      content.map( (item)=>{
        if( item.id == id ){
          this.bagContent.price += parseInt(item.price)
          this.bagContent.products.push(item)
        }
      })
    },

    login: function(val){
      this.isLogged = true
      this.userData = val
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
}
</style>
