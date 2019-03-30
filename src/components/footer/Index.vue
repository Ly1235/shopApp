<template>
     <div class="bottom">
          <li><router-link to="/" class="fa fa-home">首页</router-link></li>
      <li><router-link to="/goods" class="fa fa-shopping-bag">商品</router-link></li>
      <li><router-link to="/buycar" class="fa fa-shopping-cart">购物车</router-link></li>
      <li><router-link to="/mine" class="fa fa-user">我的</router-link></li>
   
     </div>
</template>

<script>
export default {
    
}
</script>

<style>
.bottom{
      display: flex;
      align-items: center;
      justify-content: space-around
  }
  .bottom li a{
      color: #fff;
  }
</style>
