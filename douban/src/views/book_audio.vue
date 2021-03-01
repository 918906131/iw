<template>
  <div id="book_audio">
    <Header title="书影音">
      <template slot="img_left">
        <img
          src="./../assets/img/Group/ic_actionbar_search_icon.png"
          class="img_left"
        />
      </template>
      <template slot="img_right">
        <img src="./../assets/img/Group/ic_chat_green.png" class="img_right" />
      </template>
    </Header>
    <ul class="audio_nov">
      <li v-for="item in list" :key="item.path">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <div class="wall"></div>
  </div>
</template>
<script>
import Header from "./../components/header";
export default {
  props: {},
  data() {
    return {
      list: [
        { text: "电影", path: "/book_audio/mov" },
        { text: "读书", path: "/book_audio/read_book" },
        { text: "电视", path: "/book_audio/TV" },
        { text: "同城", path: "/book_audio/same_city" },
        { text: "音乐", path: "/book_audio/music" },
      ],
    };
  },
  methods: {},

  components: {
    Header,
  },
};
</script>

<style scoped lang="less">
.audio_nov {
  display: flex;
  height: 0.3rem;
  font-size: 0;
  li {
    flex: 1;
    text-align: center;
    line-height: 0.3rem;
    border-bottom: 1px solid rgba(117, 116, 116, 0.3);
    a {
      font-size: 0.12rem;
      width: 100%;
      height: 100%;
      display: block;
      color: gray;
      &.router-link-active {
        background: #07d614;
        color: #fff;
        border-bottom: 1px solid #07d614;
      }
    }
  }
}
.wall {
  height: 0.25rem;
}
</style>
