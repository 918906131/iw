<template>
  <div id="Home">
    <Header>
      <template slot="index_s">
        <div class="wrap">
          <img src="./../assets/img/Home/img/ic_group_search_small.png" />
          <img src="./../assets/img/Home/img/ic_scan_gray.png" />
          <input type="text" placeholder="影视 图书 唱片 小组等" />
        </div>
        <img
          src="./../assets/img/Home/img/ic_chat_white.png"
          class="img_right"
        />
      </template>
    </Header>
    <Slide :delay="delay_" :effect="effect_">
      <template slot="slide">
        <swiper-slide v-for="(item, index) in slade_img" :key="index"
          ><img :src="item" alt=""
        /></swiper-slide>
        <div class="swiper-pagination"></div>
      </template>
    </Slide>
    <Menuhome :lists="list"></Menuhome>
    <div class="wall"></div>
  </div>
</template>
<script>
import Header from "./../components/header";
import Slide from "./../components/slide";
import { carousel_res, home_res } from "./../assets/js/request";
import Menuhome from "./../components/home_menu";
export default {
  props: {},
  data() {
    return {
      delay_: 2000,
      effect_: "flip",
      slade_img: [],
      list: [],
    };
  },
  methods: {},
  mounted() {
    //获取轮播图数据
    carousel_res().then((res) => {
      this.slade_img = res.hcy;
    });
    //获取首页数据
    home_res().then((res) => {
      this.list = res.recommend_feeds;
      console.log(res);
    });
  },
  components: {
    Header,
    Slide,
    Menuhome,
  },
};
</script>

<style scoped lang="less">
#header {
  background: rgb(72, 189, 90);
  position: relative;
  .wrap {
    width: 2.72rem;
    background: #fff;
    border-radius: 0.04rem 0.04rem;
    height: 0.3rem;
    position: absolute;
    top: 0.075rem;
    left: 0.05rem;
    & > img:nth-of-type(1) {
      left: 0.06rem;
    }
    & > img:nth-of-type(2) {
      right: 0.17rem;
    }
    input {
      font-size: 0.13rem;
    }
  }
}
.swiper-pagination {
  position: absolute;
  left: 50%;
  font-size: 0.12rem;
  color: rgb(62, 216, 221);
  transform: translateX(-50%);
  bottom: 10%;
}
.wall {
  height: 0.45rem;
}
</style>
