<template>
  <div id="mov">
    <p class="title">{{ now_title }}</p>
    <Slade>
      <template #slide>
        <swiper-slide v-for="(item, index) in now_list" :key="index">
          <img :src="item.cover" alt="" />
          <p>{{ item.title }}</p>
          <p>评分:{{ item.rate }}</p>
        </swiper-slide>
      </template>
    </Slade>
    <p class="title">{{ future_title }}</p>
    <Slade>
      <template #slide>
        <swiper-slide v-for="(item, index) in future_list" :key="index">
          <img :src="item.cover" alt="" />
          <p>{{ item.title }}</p>
          <p>评分:{{ item.rate }}</p>
        </swiper-slide>
      </template>
    </Slade>
  </div>
</template>

<script>
import Slade from "./../../components/book_slade";
import {  movie_now, movie_future } from "./../../assets/js/request";
export default {
  props: {},
  data() {
    return {
      now_list: [],
      future_list: [],
      now_title: "",
      future_title: "",
    };
  },
  methods: {},
  components: {
    Slade,
  },
  mounted() {
    
    //正在上映
    movie_now().then((res) => {
      this.now_list = res.subjects.list;
      this.now_title = res.subjects.title;
    });
    //待上映
    movie_future().then((res) => {
      this.future_list = res.subjects.list;
      this.future_title = res.subjects.title;
      console.log(res);
    });
  },
};
</script>

<style scoped lang="less">
#mov {
  font-size: 0;
  padding-top: 0.19rem;
  .title {
    margin-bottom: 0.19rem;
    margin-left: 0.2rem;
    color: black;
    font-size: .12rem;
  }
  .swiper-slide {
    width: 1rem !important;
    margin-left: 0.1rem;
    p {
      font-size: 0.12rem;
      text-align: center;
    }
    & > p:nth-of-type(1) {
      margin-bottom: 0.09rem;
    }
    img {
      width: 1rem;
      height: 1.4rem;
      margin-bottom: 0.07rem;
    }
  }
}
</style>
