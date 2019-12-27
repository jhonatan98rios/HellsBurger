<template>
  <div class="bag">
    <h2> Bag </h2>

    <ul v-if="bagContent != null" class="itens-list">
      <li v-for="(item, index) in bagContent.products" :key="index" class="item-list row" >
        <img :src="item.image" alt="" height="75">
        <div class="description">
          <h3> {{item.name}} </h3>
          <p> Preço: R$ {{item.price}} </p>
        </div>        
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  },

  data(){
    return{
      content: {

      }
    }
  },

  props: [
    'bagContent'
  ],
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';

.bag{
  text-align: center;

  .itens-list{
    list-style: none;
    padding: 0;
    margin: 0 auto;
    padding-bottom: 120px;

    .item-list{
      font-size: 18px;
      width: 85vw;
      height: 120px;
      filter: drop-shadow(1px 1px 5px rgba(0,0,0,.5));
      background-color: #fff;
      padding-top: 10px;
      line-height: 20px;
      margin: 0 auto;
      margin-bottom: 20px;
      justify-content: space-around;
      border-radius: 10px;

      .description{
        width: 50%;
        text-align: left;
      }
    }
  }

}
  
</style>