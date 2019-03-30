<template>
  <div id="app">
       <Header  class="header" :bln="bln" ></Header >
       <router-view class="main">main</router-view>
       <Footer  class="footer"></Footer >
     




  </div>
</template>

<script>
import Header from "./components/header/Index.vue";
import Footer from "./components/footer/Index.vue";

export default {
  name: 'app',

  data () {
    return {
        bln:false,
       
       

    }
  },
  components:{
    Header ,Footer
  }
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column
}
.header{
  height: 1rem;
  background: orangered;
  color: #fff;
}

.main{
  flex: 1;
  overflow: hidden;
}

.footer{
  height: 1rem;
  background: orangered;
  color: #fff
}




</style>
