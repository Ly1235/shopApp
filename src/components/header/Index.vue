<template>
  <!-- <div class="top">
    <li>
      <a href class="fa fa-chevron-left" >返回</a>
    </li>
    <li>
      <a href>{{title}}</a>
    </li>
    <li>
      <a href class="fa fa-list" >目录</a>
    </li>
  </div> -->
  <mt-header :title="title">
  <router-link to="/" slot="left">
    <mt-button icon="back" @click.prevent="back" v-show="isBack">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right" @click.prevent="toggleBar"></mt-button>
</mt-header>
</template>

<script>
import { Header } from 'mint-ui';

export default {
  data() {
    return {
      isBack: true,
      title: ""
    };
  },
  component:{
     Header
  },
  methods: {
    back() {
      this.$router.go(-1);
    },

    toggleBar() {
      this.$toggleBar();
    }
  },
  mounted() {
    this.$eventbus.$on(
      "isBackshow",
      function(bln) {
        this.isBack = bln;
      }.bind(this)
    );
    this.$eventbus.$on(
      "setTitle",
      function(title) {
        this.title = title;
      }.bind(this)
    );
  }
};
</script>

<style>
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top li a {
  color: #fff;
}
</style>
