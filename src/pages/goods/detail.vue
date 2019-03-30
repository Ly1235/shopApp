<template>
    <div>
        <li>
            <img :src="host+'/uploads/'+img" ><br>
            <span>
                商品名称： {{title}}
            </span><br>
             <span>
                 单价:￥{{price}}
             </span>
             <span>
                 <a href="" @click.prevent="addcart(item)">添加到购物车</a>

             </span>
        </li>
    </div>
</template>

<script>
import axios from "axios";
import {host} from "../../const";
import {mapActions} from "vuex";
export default {
    data(){
        return{
          title:"",
          img:"",
          host:host,
          price:"",
          item:[],
        }
    },
    mounted(){
        const id = this.$route.query.id;

        let url=host+"/goodsList?&_type=_id" + "&_word=" +id
        axios.get(url).then(res=>{
           this.title=res.data.result[0].title;
           this.img=res.data.result[0].img
           this.price=res.data.result[0].price
           this.item=res.data.result[0]
        })
        
    },
    methods:{
        addcart(item){
            //console.log(item)
            item.num=1
            this.addCart(item)
            this.$toastTip("添加成功")
        },
        ...mapActions(["addCart"])
    }
}
</script>

<style>

  img{
      width: 2rem;
      height: 2rem;
      border-radius: 10px
  }
</style>
