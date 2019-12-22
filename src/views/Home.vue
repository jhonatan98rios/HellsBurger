<template>
  <div class="home">
    <Navbar @select-option="selectOption" />
    <Carousel :options="content.options" v-if="renderCarousel" />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Navbar from '@/components/Navbar'
import content from '@/mockdata'

export default {
  components: {
    Carousel,
    Navbar
  },

  data(){
    return{
      renderCarousel: true,
      content: content
    }
  },

  mounted(){
    this.content.options = this.content.burgers
    this.updateCarousel()
  },

  methods:{
    selectOption: function(val){
      if(val == 'Lanches'){
        this.content.options = this.content.burgers
      }
      if(val == 'Acompanhamentos'){
        this.content.options = this.content.sideDishes
      }
      if(val == 'Bebidas'){
        this.content.options = this.content.drinks
      }
      if(val == 'Doces'){
        this.content.options = this.content.candys
      }
      this.updateCarousel()
    },

    updateCarousel: function(){
      this.renderCarousel = false
      this.$nextTick(() => {
        this.renderCarousel = true
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
  
.home{
  background-image: url("https://vistapointe.net/images/dark-textures-wallpaper-2.jpg");
  background-size: cover;
  color: #fff;
  line-height: 5px;
  height: 90vh;
}
</style>