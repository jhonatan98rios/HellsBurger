<template>
  <div class="bag">
    <h2> Bag </h2>

    <ul v-if="bagContent != null" class="itens-list">
      <li v-for="(item, index) in bagContent.products" :key="index" class="item-list" >
          <p> Nome: {{item.name}} </p>
          <p> Preço: {{item.price}} </p>
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

    .item-list{
      font-size: 18px;

      &:first-child{
        //display: none;
      }
    }
  }

}
  
</style>