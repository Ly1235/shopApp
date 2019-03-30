import Vue from 'vue';

const lazy={
   arr:[],
   show(h,y){
       var arr  = lazy.arr;
       var len = arr.length;
       for(let i=0;i<len;i++){
           var obj=arr[i];
           var elTop = obj.el.offsetHeight;
           var boxH = h;
           if(elTop<boxH+y*-1){
               obj.el.src=obj.value;
               obj.state=1;
           }

       }
       lazy.del()
   },
   del(){
     lazy.arr = lazy.arr.filter( ele=>ele.state===0 )
      //console.log(lazy.arr)
   }
}
Vue.directive("lazyload", {
    bind(el, b, vnode){
        lazy.arr.push({
            el,
            value : b.value,
            state: 0
        })
    }
})

export default lazy;

