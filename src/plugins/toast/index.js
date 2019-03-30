
import { Toast } from 'mint-ui';

const toastTips={}
toastTips.install=function(Vue,options){
    // var tTip = Vue.extend(toast);
    // var vm  = new tTip().$mount();
     
    Vue.prototype.$toastTip=function(obj){ 
        let instance = Toast(obj);
        setTimeout(() => {
          instance.close();
        }, 1000);
    }
 
}

export default toastTips;