<template>
  <div class="footer w-100 is-fixed p-t-8">
    <ul class="icon-list">
      <li v-for="(icon, i) in content.icons" :key="i" class="list-item" >
        <router-link :to="icon.url">
          <img :src="icon.img" alt="" width="45" class="invert-colors">
        </router-link>
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
          {
            img: "https://i.pinimg.com/originals/58/0d/ce/580dce3fdedfcad4cc651b1ad82394b2.png",
            url: "/",
            alt: "#"
          },
          {
            img: "https://cdn2.iconfinder.com/data/icons/data-analytics-16/34/29-512.png",
            url: "/ranking",
            alt: "#"
          },
          {
            img: "https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png",
            url: "/account",
            alt: "#"
          },
          {
            img: "https://image.flaticon.com/icons/png/512/58/58271.png",
            url: "/bag",
            alt: "#"
          }
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
  margin: 0;
  
  /deep/a{
    text-decoration: none;
    color: #fff;
  }
}
</style>