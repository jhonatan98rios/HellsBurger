<template>
  <div class="carousel">
    <flickity  class="flickity" ref="flickity" :options="flickityOptions">
      <div v-for="(option, i) in content.options" :key="i" class="option">
        <img :src="option.image" alt="burguer" width="200" class="m-t-32" />
        <h3  v-html="option.name" class="m-t-32" />
      </div>
    </flickity>
  </div>
</template>

<script>

import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },

  data(){
    return{
      content: {
        options:[
          {
            name: "burger1",
            price: "R$10,00",
            image: "https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png"
          },
          {
            name: "burger2",
            price: "R$20,00",
            image: "http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"
          },
          {
            name: "burger3",
            price: "R$30,00",
            image: "https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=895%2C895"
          },
          {
            name: "burger",
            price: "R$40,00",
            image: "https://purepng.com/public/uploads/medium/purepng.com-fast-food-burgerburgerfast-foodhammeatfast-food-burgermc-donaldsburger-king-231519340212fozvm.png"
          }
        ]
      },
      flickityOptions: {
        draggable: true,
        initialIndex: 1,
        pageDots: true,
        prevNextButtons: false,
        //wrapAround: true,
        //autoPlay: 2000
      }
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
.carousel{
  .flickity{
    height: 60vh;
    width: 100%;

    .option{
      background-color: #fff;
      border-radius: 50px;
      color: #000;
      width: 55vw;
      height: 50vh;
      margin-left: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
      transition: all .5s;
      filter: drop-shadow(1px 1px 3px rgba(0,0,0,.5));

      /* img{
        transition: all .5s;
      }
    }

    .is-selected{
      transform: scale(1.05);
      transition: all .5s;

      img{
        transform: scale(1.5);
      } */
    }
  }
}
</style>