<template>
  <div id="mine">
    <Header title="我的">
      <template slot="img_right">
        <img src="./../assets/img/Mine/ic_settings.png" class="img_right" />
      </template>
    </Header>
    <ul class="nov">
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-password"></use>
        </svg>
        <span>密码管理</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-order-fill"></use>
        </svg>
        <span>银行卡管理</span>
      </li>
    </ul>
    <Help_menu :list="list_"></Help_menu>
  </div>
</template>
<script>
import Header from "./../components/header";
import Help_menu from "./../components/help_menu";
export default {
  props: {},
  data() {
    return {
      src_icon: "#icon-suggest",
      list_: [
        {
          title: "风险承受能力评估",
          icon_src: "#icon-suggest",
        },
        {
          title: "安全保障",
          icon_src: "#icon-anquan",
        },
        {
          title: "我的关注",
          icon_src: "#icon-account",
        },
        {
          title: "帮助中心",
          icon_src: "#icon-help",
        },
        {
          title: "关于我们",
          icon_src: "#icon-live-spiker",
        },
        {
          title: "检查更新",
          icon_src: "#icon-viewlarger",
        },
        {
          title: "联系客服",
          icon_src: "#icon-service",
        },
      ],
    };
  },
  methods: {},
  components: {
    Header,
    Help_menu,
  },
};
</script>

<style scoped lang="less">
.icon {
  width: 0.28rem;
  height: 0.27rem;
  vertical-align: -0.15em;
  fill: currentColor;
  color: rgb(66, 189, 86);
  overflow: hidden;
}
.nov {
  display: flex;
  height: 0.83rem;
  border-bottom: 1px solid rgba(117, 116, 116, 0.3);
  li {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    font-size: 0.13rem;
    span {
      margin-top: 0.06rem;
    }
  }
}
</style>
