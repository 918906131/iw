<template>
  <ul id="footer">
    <li v-for="item in list" :key="item.path">
      <router-link :to="item.path">
        <img :src="item.img_nomal" class="img_one" />
        <img :src="item.img_active" class="img_two" />
        {{ item.text }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list: [
        {
          path: "/home",
          text: "首页",
          img_nomal: require("./../assets/img/footer/ic_tab_home_normal.png"),
          img_active: require("./../assets/img/footer/ic_tab_home_active.png"),
        },
        {
          path: "/book_audio",
          text: "书影音",
          img_nomal: require("./../assets/img/footer/ic_tab_subject_normal.png"),
          img_active: require("./../assets/img/footer/ic_tab_subject_active.png"),
        },
        {
          path: "/status",
          text: "广播",
          img_nomal: require("./../assets/img/footer/ic_tab_status_normal.png"),
          img_active: require("./../assets/img/footer/ic_tab_status_active.png"),
        },
        {
          path: "/group",
          text: "小组",
          img_nomal: require("./../assets/img/footer/ic_tab_group_normal.png"),
          img_active: require("./../assets/img/footer/ic_tab_group_active.png"),
        },
        {
          path: "/mine",
          text: "我的",
          img_nomal: require("./../assets/img/footer/ic_tab_profile_normal.png"),
          img_active: require("./../assets/img/footer/ic_tab_profile_active.png"),
        },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
#footer {
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  z-index: 1;
  height: 0.49rem;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  li {
    flex: 1;
    font-size: 0;
    a {
      flex-flow: column;
      display: flex;
      align-items: center;
      font-size: 0.12rem;
      img {
        width: 0.3rem;
      }
      .img_one {
        display: block;
      }
      .img_two {
        display: none;
      }
      &.router-link-active {
        color: rgb(66, 189, 86);
        .img_two {
          display: block;
        }
        .img_one {
          display: none;
        }
      }
    }
  }
}
</style>
