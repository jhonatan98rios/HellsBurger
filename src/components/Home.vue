<template>
  <div class="home">
    <Carousel />
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  components: {
    Carousel
  },

  data(){
    return{
      content: {

      }
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
  
.home{
  background-color: #999;
  color: #fff;
  line-height: 5px;
  height: 80vh;
}
</style>