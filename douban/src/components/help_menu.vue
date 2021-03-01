<template>
  <ul class="help_menu">
    <li v-for="item in list" :key="item.icon_src">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon_src"></use>
      </svg>
      <span>{{ item.title }}</span>
      <span>></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
.help_menu {
  font-size: 0;
  li {
    height: 0.45rem;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid rgba(117, 116, 116, 0.3);
    .icon {
      width: 0.28rem;
      height: 0.27rem;
      margin-left: 0.16rem;
      vertical-align: -0.15em;
      fill: currentColor;
      color: rgb(66, 189, 86);
      overflow: hidden;
    }
    span {
      font-size: 0.12rem;
    }
    & > span:nth-of-type(1) {
      margin-left: 0.11rem;
    }
    & > span:nth-of-type(2) {
      position: absolute;
      right: 0.21rem;
      color: rgb(66, 189, 86);
      font-size: 0.22rem;
    }
  }
}
</style>
