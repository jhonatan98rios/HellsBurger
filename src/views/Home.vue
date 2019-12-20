<template>
  <div class="home">
    <Navbar />
    <Carousel />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Carousel,
    Navbar
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