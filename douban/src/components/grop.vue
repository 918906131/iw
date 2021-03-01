<template>
  <div class="grop">
    <div class="menu_wrap" v-for="item in list" :key="item.title">
      <p class="title">{{ item.title }}</p>
      <div class="menu" v-for="value in item.group_list" :key="value.img_url">
        <img :src="value.img_url" alt="" />
        <span>{{ value.group_name }}</span>
        <span>{{ value.group_member }}</span>
        <p >{{ value.topic_title }}</p>
      </div>
      <p class="foot_title">更多相关小组</p>
    </div>
  </div>
</template>

<script>
import {  group } from "../assets/js/request";
export default {
  props: {},
  data() {
    return {
      list: [],
    };
  },
  methods: {},
  components: {},
  mounted() {
    
    //获取数据
    group().then((res) => {
      this.list = res.group;
      console.log(res);
    });
  },
};
</script>

<style scoped lang="less">
.grop {
  font-size: 0.12rem;
  margin-left: 0.18rem;
  padding-top: 0.18rem;
  .menu_wrap {
    margin-bottom: 0.39rem;
    .title{
      color: black;
      font-size: .14rem;
    }
    .menu {
      font-size: 0;
      position: relative;
      height: 1rem;
      padding-top: 0.3rem;
      border-bottom: 1px solid rgba(117, 116, 116, 0.3);
      img {
        width: 0.4rem;
        top: 0.2rem;
        height: 0.4rem;
        border-radius: 0.04rem 0.04rem;
        position: absolute;
      }
      p {
        font-size: 0.12rem;
        margin-top: 0.17rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      span {
        font-size: 0.12rem;
      }
      & > span:nth-of-type(1) {
        margin-left: 0.68rem;
        color: black;
      }
      & > span:nth-of-type(2) {
        position: absolute;
        right: 0.1rem;
      }
    }
    .foot_title {
        color: rgb(66, 189, 86);
        text-align: center;
        margin-top: .16rem;
    }
  }
}
</style>
