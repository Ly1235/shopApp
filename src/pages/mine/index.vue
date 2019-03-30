<template>
    <div>
        <router-link to="/mine/regist">
              注册
        </router-link>

        <router-link to="/mine/login">
                登录
        </router-link>
        <router-view class="box">

        </router-view>
    </div>
</template>

<script>
export default {
    mounted(){
         this.$eventbus.$emit("setTitle", "我的")
    }
}
</script>
<style>

</style>
