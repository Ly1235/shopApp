<template>
  <div class="content">
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
          <img class="swiper-img" :src="slide" alt>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="search">
      <li>
        <router-link to="/goods?type=服装">服装</router-link>
      </li>
      <li>
        <router-link to="/goods?type=水果">水果</router-link>
      </li>
      <li>
        <router-link to="/goods?type=其他">其他</router-link>
      </li>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,

    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true, //自动切换
        pagination: {
          el: ".swiper-pagination" //分页器
        },
        paginationType: "custom",
        speed: 500,
        autoHeight: true,
        effect: "slide",
        loop: true,
        direction: "horizontal"
      },
      swiperSlides: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553182206538&di=660ab66a69a35b68d901bd949f6a36fc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a39258eddb07a8012049ef53b617.jpg%401280w_1l_2o_100sh.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3193700667,2677059985&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2518210874,2216422914&fm=26&gp=0.jpg"
      ]
    };
  },
  mounted() {
    this.$eventbus.$emit("isBackshow", false);
    this.$eventbus.$emit("setTitle", "首页");
  },
  destroyed() {
    this.$eventbus.$emit("isBackshow", true);
  }
};
</script>
<style>
.content {
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
}
.banner {
  width: 100%;
  height: 3rem;
  overflow: hidden;
}
.banner img {
  width: 100%;
  height: 3rem;
}
.search {
  height: 2rem;
}
</style>
