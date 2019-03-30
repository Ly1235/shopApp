import Vue from "vue";
import VueRouter from "vue-router"
import Index from "../pages/index"
import Goods from "../pages/goods"
import Detail from "../pages/goods/detail.vue"
import Buycar from "../pages/buycar"
import Mine from "../pages/mine"
import Reg from "../pages/mine/regist.vue"
import Login from "../pages/mine/login.vue"
Vue.use(VueRouter)


var routes=[
    {path:"/",component:Index},
    {path:"/goods",component:Goods},
    {path:"/goods/:type",component:Goods},
    {path:"/detail",component: Detail},
    {path:"/buycar",component:Buycar},
    {path:"/mine",component:Mine,children: [
		{ path: '/mine/regist', component: Reg },
		{ path: '/mine/login', component: Login},
	]}

]

var router=new VueRouter({routes,mode:"history"})

export default router;
