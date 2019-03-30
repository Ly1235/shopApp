import Tip from"./tip.vue";



const tipMsg = {}


tipMsg.install=function(Vue,options){
    var tTip = Vue.extend(Tip);
    var vm  = new tTip().$mount();
    document.body.appendChild(vm.$el);
    // var step=options.step;
    
    Vue.prototype.$showTip=function(obj){
      
        // console.log()
        var timer=setInterval(()=>{  vm.str=obj.step+"秒之后跳转到"+obj.msg
        vm.show=true;
        if(obj.step==0){
        vm.show=false;
        obj.obj.$router.push({ path:obj.path}) ;
            clearInterval(timer);
            return;
        }  
        obj.step--; 
    }, obj.time);  
  }


    
}


 
export default tipMsg;