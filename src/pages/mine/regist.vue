<template>
    <!-- <div class="box">
        用户名：<input type="text"  v-model="username.val"><br><br>
        密码：<input type="text" @blur="chkPwd1" v-model="pwd1.val">{{pwd1.tip}}<br><br>
        确认密码：<input type="text" @blur="chkPwd2" v-model="pwd2.val">{{pwd2.tip}}<br><br>
        <input type="submit" value="注册" @click.prevent="reg">
    </div> -->
   <div> 
   <mt-field label="用户名" placeholder="请输入用户名" @blur="chkName" v-model="username.val"><span>{{username.tip}}</span></mt-field>
   <mt-field label="密码" placeholder="请输入密码" type="password" v-model="pwd1.val"  @blur="chkPwd1" ></mt-field>
   </div>
</template>

<script>
import axios from "axios";
import {host} from "../../const"
import { Field } from 'mint-ui';
export default {
    data(){
        return{
            username:{
                val:"",
                tip:""
            },
            pwd1:{
                val:"",
                tip:""
            },
            pwd2:{
                val:"",
                tip:""
            },
            flag:true,
            msg:""
        }
    },
    components:{
        Field
    },
    methods:{
        chkName(){
            if(this.username.val.trim()==""){
                this.username.tip="用户名不能为空"
                this.flag=false;
            }else{
               const data="username="+this.username.val.trim();
                let url=host+"/checkuser";
               
                axios.post(url,data).then(res=>{
                  this.username.tip=res.data
                })
                if(this.username.tip=="用户名已注册"){
                    this.flag=false;
                }else{
                    this.flag=true
                }
            
            }
        }  ,
        chkPwd1(){
              if(this.pwd1.val.trim()==""){
                  this.pwd1.tip="密码不能为空";
                  this.flag=false;
              }else{
                  this.pwd1.tip=""
                  this.flag=true
              }
              
        },
        chkPwd2(){
              if(this.pwd2.val.trim()==""){
                  this.pwd2.tip="确认密码不能为空"
                    this.flag=false;
              }else{
                 
                if(this.pwd2.val.trim()!=this.pwd1.val.trim()){
                    this.pwd2.tip="两次密码不一致"
                    this.flag=false;
                    
                }else{
                    this.pwd2.tip=""
                    this.flag=true
                }
                //
              }
        },
        reg(){
           
              if(this.flag){
                    let body="username="+this.username.val+"&password="+this.pwd1.val;
                    let url = host+"/regist"
                    //console.log(url)
                    axios.post(url,body).then(res=>{
                             if(res.data=="用户名已注册"){
                                 alert(res.data)
                             }
                            this.$showTip({"msg":"登录页面","step":5,"time":1000,"path":"/mine/login","obj":this})  
                      })
                    
              }else{
                  alert("信息填写不完整")
              }
        }
    }
}
</script>

<style>
 .box{
     margin-top: 0.5rem;
 }
 .box input[type="text"]{
     margin-left: 0.2rem;
     border: 1px solid #ccc
 }
</style>
