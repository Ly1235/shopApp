<template>
 <transition
         enter-active-class="animated fadeIn"
         leave-active-class="animated fadeOut"
       >
    <div class="tipMsg" v-if="show">
       {{str}}
    </div>
    </transition>
</template>


<script>
export default {
    data(){
        return{
            show:false,
            str:""
        }
    }
}
</script>

<style>
   .tipMsg{
       width: 2rem;
       height: 2rem;
       border-radius: 10px;
       background: rgba(0, 0, 0, .7);
       position: fixed;
       top: 50%;
       left: 50%;
       transform: translate(-50%,-50%);
       color: #fff
   }
</style>

