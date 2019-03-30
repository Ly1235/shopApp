<template>
    <div>
       
        用户名：<input type="text"  v-model="username"><br><br>
        密码：<input type="text"  v-model="pwd"><br><br>
        <input type="submit" value="登录" @click.prevent="login">
  
    </div>
</template>
<script>
import {host} from"../../const";
import axios from "axios"

export default {
    data(){
       return{
          username:"",
           pwd:""
       }
    },
    methods:{
    login(){
        console.log(this.username)
       if(this.username.trim()==""||this.pwd.trim()==""){
             alert("用户名或密码不能为空！")
         }else{
      let body="username="+this.username+"&password="+this.pwd;
       let url = host+"/login"
         axios.post(url,body).then(res=>{
                 console.log(res.data)
                 if(res.data=="登录成功"){
                     this.$showTip({"msg":"首页","step":5,"time":1000,"path":"/","obj":this})
                 
                 }else{
                     alert(res.data);
                 }

           })
         }
      }
    }
}
</script>
