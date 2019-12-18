<template>
  <div class="header w-100 p-t-8">
    <h1 class="text-center" v-html="content.title"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content: {
        title: "Hell's Burger",
        subtitle: "Peça e se surpreenda!!"
      }
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
  
.header{
  background-color: #000;
  color: #fff;
  line-height: 5px;
  height: 60px;
}
</style>