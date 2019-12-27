<template>
  <div class="ranking">
    <h2> Top 10 </h2>

    <div class="itens-list">
      <div v-for="(item, index) in products" :key="index" class="item-list row">
        <img :src="item.image" alt="" height="75" width="90">
        <div class="description">
          <h3> {{item.name}} </h3>
          <p> Preço: R$ {{item.price}} </p>
          <p> Nota: {{item.rank}} </p>
          <button class="add" @click="addtoBag" :value="item.id" > + </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from '@/mockdata'

export default {
  components: {
  },

  data(){
    return{
      content: {

      },
      products: []
    }
  },

  methods:{
    addProduct: function(content){
      content.map( (item)=>{
        this.products.push(item)    
      })
    },

    compare: function (x, y) {
      // Use toUpperCase() to ignore character casing
      const a = x.rank;
      const b = y.rank;

      let comparison = 0;
      if (a > b) {
        comparison = -1;
      } else if (a < b) {
        comparison = 1;
      }
      return comparison;
    },

    addtoBag: function(val){
      let id = val.target.attributes.value.value
      this.$emit('add-to-bag', id)
    }
  },

  mounted(){
    this.addProduct(content.burgers)
    this.addProduct(content.sideDishes)
    this.addProduct(content.drinks)
    this.addProduct(content.candys)
    this.products = this.products.sort(this.compare)

    let ranking = []
    for(let i=0; i < 10; i++){
      ranking.push(this.products[i])
    }
    this.products = ranking
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
  
.ranking{
  text-align: center;
  padding-bottom: 75px;
  background-image: linear-gradient(0deg, var(--pink), var(--orange));

  h2{
    margin: 0 auto;
    padding: 20px 0;
    color: #fff;
  }

  .itens-list{
    list-style: none;
    padding: 0;
    margin: 0 auto;

    .item-list{
      font-size: 18px;
      width: 85vw;
      max-width: 768px;
      height: 120px;
      filter: drop-shadow(1px 1px 5px rgba(0,0,0,.5));
      background-color: #fff;
      padding-top: 10px;
      line-height: 10px;
      margin: 0 auto;
      margin-bottom: 20px;
      justify-content: space-around;
      border-radius: 10px;

      .description{
        width: 50%;
        text-align: left;
        line-height: 20px;
        position: relative;

        @media(min-width: 768px){
          width: 65%;
        }

        p, h3{
          margin: 5px auto;
          padding: 0;
        }

        .add{
          background-image: linear-gradient(90deg, var(--pink), var(--orange));
          color: #fff;
          border: none;
          border-radius: 25px;
          height: 40px;
          width: 40px;
          font-size: 30px;
          position: absolute;
          right: 0px;
          bottom: 10px;
        }
      }
    }
  }
}
</style>