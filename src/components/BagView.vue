<template>
  <div class="bagview">
    <router-link to="/bag" class="no-link">
      <h3 class="price money" v-html="content.bag.price"/>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content: {
        bag:{
          price: '100'
        }
      }
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
@import '../assets/css/variables.css';
  
.bagview{
  width: 100%;
  height: 60px;
  //background-image: linear-gradient(90deg, var(--pink), var(--orange));
  background-color: var(--pink);
  position: fixed;
  bottom: 60px;
  text-align: center;
  color: #fff;
  //filter: drop-shadow(1px 1px 5px rgba(0,0,0,.7));
  box-shadow: 1px 1px 10px #222;

  .price{
    font-size: 24px;
    margin: 10px;
  }


}

</style>