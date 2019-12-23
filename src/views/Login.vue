<template>
  <div class="login" v-if="isVisible">
    <form action="#" class="form">
      <h2 class="title"> Login </h2>
      <input type="text" placeholder="Nome" v-model="user.name" />
      <input type="text" placeholder="Telefone" v-model="user.phone" />
      <input type="text" placeholder="Endereço" v-model="user.address" />

      <router-link to="/" class="no-link text-center">
        <input type="button" value="Confirm" class="button" @click="saveUser" />
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        name: null,
        phone: null,
        address: null
      },
      isVisible: true
    }
  },

  methods:{
    saveUser: function(){
      //console.log(this.user)
      if( this.user.name && this.user.phone && this.user.address ){
        this.isVisible = false
        this.$emit('is-logged', this.user)

        let userData = JSON.stringify(this.user)
        localStorage.setItem('burgerLogged', userData)
      }
    }
  },

  mounted(){

    let userData = JSON.parse(localStorage.getItem('burgerLogged'))

    if( userData ){
      this.$emit('is-logged', userData)
      this.isVisible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.login{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(0deg, var(--pink), var(--orange));
  padding-top: 100px;
  position: absolute;
  z-index: 90;

  .form{
    width: 90%;
    height: 60vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 10px;

    .title{
      color: #000;
      text-align: center;
      margin: 0 auto;
      padding: 50px 0px 20px;
    }

    input{
      width: 70vw;
      height: 40px;
      margin: 10px auto;
      border: none;
      background-color: #eee;
      padding: 10px;
      font-size: 16px;
      color: #555;
      border-radius: 5px;
    }

    .button{
      background-image: linear-gradient(90deg, var(--pink), var(--orange));
      color: #fff;
      padding: 10px;
      height: 50px;
      font-size: 18px;
    }
  }
}

</style>
