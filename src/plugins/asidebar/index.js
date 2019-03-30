import AsideBar from "./AsideBar.vue";



const asidebar ={};


asidebar.install=function(Vue,options){
    var aBar = Vue.extend(AsideBar);
    var vm  = new aBar().$mount();
    document.body.appendChild(vm.$el);
    Vue.prototype.$toggleBar=function(){
        vm.isShow=!vm.isShow;
    }
}



export default asidebar;