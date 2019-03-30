<template>
    <div>
       <transition
         enter-active-class="animated fadeInRight"
         leave-active-class="animated fadeOutRight"
       >
        <div class="sideMenu" v-show="isShow">
        </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
      return{
            isShow:false
      }
    }
}
</script>


<style >
    .sideMenu{
        width: 5rem;
        height:10rem;
        background: rgba(0,0,0,.7);
        position: fixed;
        right: 0;
        z-index: 99;
        top: 1rem;
    }
</style>

