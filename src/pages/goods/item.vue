<template>
  <router-link :to="'/detail?id='+item._id">  <li>
        
            <img :src="initimg" v-lazyload="host+'/uploads/'+item.img" ><br>
             <h4>{{item.title}}</h4>
      
    </li>  </router-link>
</template>


<script>
import {host} from "../../const";
import initimg from"../../assets/images/timg.gif"
export default {
      data(){
          return{
              host:host,
               initimg:initimg
          }
      },
      props:["item"]
}
</script>

<style>
  img{
      width: 2rem;
      height: 2rem;
      border-radius: 5px;

  }
</style>

