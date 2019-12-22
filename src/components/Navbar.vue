<template>
  <div class="navbar">
    <ul>
      <li v-for="(option, i) in content.options" :key="i" v-html="option.text" class="" @click="selectOption" />
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content: {
        options: [
          {
            text: "Lanches",
            link: "#",
          },
          {
            text: "Acompanhamentos",
            link: "#",
          },
          {
            text: "Bebidas",
            link: "#",
          },
          {
            text: "Doces",
            link: "#",
          }
        ]
      }
    }
  },

  methods: {
    selectOption: function(val){
      let value = val.target.innerText
      this.$emit('select-option', value)
    }
  }
    
}
</script>

<style scoped lang="scss">
@import '../assets/css/style.css';

.navbar{
  width: 100%;
  height: 40px;
  background-color: #fff;
  filter: drop-shadow(1px 1px 5px rgba(0,0,0,.3));

  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 15px 0;
    margin: 0;

    li{
      color: #333;
      transition: all .2s;

      &:hover{
        transition: all .2s;
        transform: scale(1.2);
        color: #000;
      }
    }

  }
}

</style>