<template>
    <div class="item" @touchmove.prevent>
        <ul >
            <Item v-for="val in arr" :key="val._id" :item="val">
            </Item>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import {host} from "../../const";
import Item from "./item.vue";
import Iscroll from "iscroll"
import lazy from "../../drectives/lazyload/index.js"
export default {
    data(){
       return{
           type:"",
           arr:[]
       }
    },
    watch:{
    $route(now,old){     //监控路由变换，控制返回按钮的显示
     if(now.path=="/"){
            this.$parent.backShow=false;
     } else{
         this.$parent.backShow=true;
     }
     }
    },    
    mounted(){
         // console.log()       
           this.$eventbus.$emit("setTitle", "商品")
          this.type=this.$route.query.type;
          var page=1;
          axios.get(host+"/goodsList?_page="+page+ "&_type=type" + "&_word=" +this.type).then(res=>{
              this.arr=res.data.result;
          })
        var self=this
         var myScroll ;
        
         setTimeout(()=>{
             myScroll = new Iscroll(".item");
            myScroll.on('scrollEnd', function () {
                
                if ( this.y == 0 ) {
                    // do something
                    console.log("到顶部了")
                }else if(this.y==document.querySelector(".item").offsetHeight-document.querySelector(".item>ul").offsetHeight){
                    console.log(document.querySelector(".item").offsetHeight-document.querySelector(".item>ul").offsetHeight)
                          page++;
                         
                          axios.get(host+"/goodsList?_page="+page+ "&_type=type" + "&_word=" +self.type).then(res=>{
                         if(res.data.result.length!=0){
                              self.arr=self.arr.concat(res.data.result)
                        
                        }
                         setTimeout(function () {
                                myScroll.refresh();
                            }, 0);                         
                  })
                    
                } 
                lazy.show( document.querySelector(".item").offsetHeight, this.y );
            })     
            lazy.show(document.querySelector(".item").offsetHeight, 0 );          
         },2000)  
        
    },
    components:{
      Item  
    }
}
</script>


<style>
  .item{
      background: #333;
  }
  .item ul{
      background: #fff;
  }
</style>

