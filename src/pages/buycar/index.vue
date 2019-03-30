<template>
    <div class="item" @touchmove.prevent>
        <ul>
            <li v-for="(val,ind) in cartlist" :key="ind">
                <img :src="initimg" v-lazyload="host+'/uploads/'+val.img" >
                {{val.title}}
        数量：<a href="" @click.prevent="update(val._id,-1)" class="fa fa-minus-square-o"></a> 
             <span>{{val.num}}</span> 
             <a href="" @click.prevent="update(val._id,1)" class="fa fa-plus-square-o"></a>
  
            </li>
          
        </ul>
    </div>
</template>

<script>
import Iscroll from "iscroll";
import lazy from "../../drectives/lazyload/index.js"
import {host} from "../../const";
import {mapActions} from "vuex";
import initimg from"../../assets/images/timg.gif";
export default {
    data(){
        return{
            host:host,
            initimg:initimg
        }
    },
    mounted(){
        var myScroll ;
        setTimeout(()=>{
             myScroll = new Iscroll(".item");
            myScroll.on('scrollEnd', function () {
                
                if ( this.y == 0 ) {
                    // do something
                    console.log("到顶部了")
                }else if(this.y==document.querySelector(".item").offsetHeight-document.querySelector(".item>ul").offsetHeight){
                         setTimeout(function () {
                                myScroll.refresh();
                            }, 0);                         
                 
                } 
                lazy.show( document.querySelector(".item").offsetHeight, this.y );
            })     
            lazy.show(document.querySelector(".item").offsetHeight, 0 );          
         },2000)  

        this.$eventbus.$emit("setTitle", "购物车")
    },
    computed:{
        cartlist(){
            return this.$store.state.goodsList
        }
    },
    methods:{
       update(item,n){
         //console.log(item)
         const data={"_id":item,"num":n}
         this.addCart(data)
       },
       ...mapActions(["addCart"])
    }
}
</script>

<style>
  img{
      width: 2rem;
      height: 2rem;
      border-radius: 5px;
  }

 .item{
      background: #333;
  }
  .item ul{
      background: #fff;
  }
</style>
