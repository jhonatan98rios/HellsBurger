<template>
  <div class="account">
    <h2 class="account-title"> Configurações de Conta </h2>

    <div class="drop-drown">
      <div class="show-description" @click="showDescription"> 
        <h3> 
          Dados do Usuário 
          <span v-if="!description"> &#9662; </span>
          <span v-if="description"> &#9652; </span>
        </h3>
      </div>
      <div class="description" v-if="description">
        <p> Nome: {{ userData.name }} </p>
        <p> Telefone: {{ userData.phone }} </p>
        <p> Endereço: {{ userData.address }} </p>
        <div class="logout">
          <button @click="logout"> Logout </button>
        </div>
      </div>
    </div>

    <div class="drop-drown">
      <div class="show-order" @click="showOrder" >
        <h3> 
          Pedido
          <span v-if="!order"> &#9662; </span>
          <span v-if="order"> &#9652; </span>
        </h3>
      </div>
      <div class="order" v-if="order">
        <p> ID: #125122 </p>
        <p> Pedidos: Hamburguer, Coca, Batata </p>
        <p> Preço: R$30 </p>
        <div class="cancel">
          <button> Cancelar Venda </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  components: {
  },

  data(){
    return{
      content: {

      },
      description: false,
      order: false
    }
  },

  props:[
    'userData'
  ],

  methods:{
    showDescription: function(){
      this.description = !this.description
    },
    showOrder: function(){
      this.order = !this.order
    },
    logout: function(){
      localStorage.removeItem('burgerLogged')
      location.reload();
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/style.css';
  
.account{
  text-align: center;
  background-color: #fff;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 0;

  .account-title{
    margin: 0 auto 20px;
  }

  .drop-drown{
    margin: 0 auto;
    padding: 5px;
    width: 70vw;
    filter: drop-shadow(1px 1px 5px rgba(0,0,0,.3));

    .show-description, .show-order{
      width: 100%;
      padding: 5px;
      background-image: linear-gradient(90deg, var(--pink), var(--orange));
      color: #fff;
    }

    .description, .order{
      background-color: #fff;
      width: 100%;
      padding: 10px 1.5%;
      text-align: left;

      p{
        margin-left: 30px;

        &:first-child{
          margin-top: 0px;
        }
      }

      .logout, .cancel{
        width: 70vw;
        margin: 0 auto;
        text-align: center;

        button{
          background-image: linear-gradient(90deg, var(--pink), var(--orange));
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 10px;
          height: 40px;
          font-size: 18px;
        }
      }
    }
  }

}

</style>