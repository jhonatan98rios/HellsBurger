<template>
  <div class="splash" v-if="isLoading">
    <div id="loading-wrapper">
      <div id="loading-text">LOADING</div>
      <div id="loading-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isLoading: true
    }
  },

  mounted() {
    setTimeout(()=>{
      this.isLoading = false
    }, 
    500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.splash{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #333, #111 );
  z-index: 99; 
}

#loading-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  #loading-text {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    color: orange;
    width: 100px;
    height: 30px;
    margin: -7px 0 0 -45px;
    text-align: center;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 20px;
  }
  #loading-content {
    display: block;
    position: relative;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    width: 170px;
    height: 170px;
    margin: -85px 0 0 -85px;
    border: 3px solid orange;
  }
  #loading-content {
    border: 20px solid transparent;
    border-top-color: orange;
    border-bottom-color: orange;
    border-radius: 50%;
    -webkit-animation: loader 3s linear infinite;
    -moz-animation: loader 3s linear infinite;
    -o-animation: loader 3s linear infinite;
    animation: loader 3s linear infinite;
  }
  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>
