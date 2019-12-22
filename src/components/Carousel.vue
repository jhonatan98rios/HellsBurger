<template>
  <div class="carousel">
    <flickity  class="flickity" ref="flickity" :options="flickityOptions">
      <div v-for="(option, i) in options" :key="i" class="option">
        <div class="box-image">
          <img :src="option.image" alt="burguer" class="m-t-32" height="200" width="180" />
        </div>
        <div class="description-box">
          <h3 v-html="option.name" class="m-t-32" />
          <p v-html="option.price" class="money" />
          <p v-html="content.add" class="add" @click="addtoBag" :value="option.price" />
        </div>
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
        add: 'add to card'
      },
      flickityOptions: {
        draggable: true,
        initialIndex: 0,
        pageDots: false,
        prevNextButtons: false,
        lazyLoad: true,
        //wrapAround: true,
        //autoPlay: 2000
      }
    }
  },

  props: [
    'options'
  ],

  methods:{
    addtoBag: function(val){
      let id = parseInt(val.target.attributes.value.value)
      this.$emit('add-to-bag', id)
    }
  }
  
    
}
</script>

<style scoped lang="scss">
@import '../assets/css/style.css';
.carousel{
  .flickity{
    height: 60vh;
    width: 100%;

    .option{
      background-color: #fff;
      border-radius: 40px;
      color: #000;
      width: 60vw;
      height: 60vh;
      margin-top: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      text-align: center;
      transition: all .5s;

      .box-image{
        width: 100%;
        height: 250px;
        display: flex;
        vertical-align: middle;
        justify-content: center;

        img{
          transition: all .5s;
        }
      }

      .description-box{
        width: 100%;
        line-height: 25px;

        .add{
          width: 100px;
          height: 30px;
          background-image: linear-gradient(0deg, var(--pink), var(--orange));
          margin: 0 auto;
          color: #fff;
          border-radius: 20px;
          padding: 5px;

          &:before{
            content: '+ '
          }
        }
      }
    }

    
    .is-selected{
      transform: scale(1.05);
      transition: all .5s;

      img{
        transform: scale(1.3);
      } 
    }
   
  }
}
</style>