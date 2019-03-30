import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        goodsList:JSON.parse(localStorage.getItem("goodslist")||"[]")
    },
    mutations:{
        addCart(state,payload){
                state.goodsList.push(payload);
                
        },
        updateNum(state,payload){ 
            state.goodsList[payload.ind].num+=payload.num;
            state.goodsList=JSON.parse(JSON.stringify(state.goodsList))
            
        },
        del(state,payload){

            state.goodsList.splice(payload,1)
        }
    },
    actions:{
        addCart(context,payload){
            //console.log(payload)
            var ind = context.state.goodsList.findIndex(val=>val._id==payload._id) 
            
            if(ind==-1){
               context.commit("addCart",payload)
            }else{
                if(payload.num==1){
                    context.commit("updateNum",{ind,num:payload.num})
                }else{
                  
                    var i = context.state.goodsList[ind].num+payload.num
                    if(i==0){
                        context.commit("del",ind)
                    }else{
                        context.commit("updateNum",{ind,num:payload.num})
                    }
                }
            }
        }
    }
})


store.subscribe(function(mutations,state){
       localStorage.setItem("goodslist",JSON.stringify(state.goodsList))
})


export default store;