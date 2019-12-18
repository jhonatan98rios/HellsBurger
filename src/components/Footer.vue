<template>
  <div class="footer w-100 is-fixed p-t-8">
    <ul class="icon-list">
      <li v-for="(icon, i) in content.icons" :key="i" class="list-item">
        {{icon}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content: {
        icons: [
          '*', /* Home */
          '*', /* Ranking */
          '*', /* Bag */
          '*'  /* About */
        ]
      }
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
  
.footer{
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(270deg, #ca0000, #ff9400) 1 0%;
  border-bottom: none;
  border-left: none;
  background-color: #000;
  color: #fff;
  line-height: 5px;
  height: 60px;
  bottom: 0;
}

.icon-list{
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}
</style>