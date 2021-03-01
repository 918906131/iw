<template>
  <div id="header">
    <span class="title">{{ title }}</span>
    <slot name="img_left"></slot>
    <slot name="img_right"></slot>
    <slot name="index_s"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
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
#header {
  position: relative;
  height: 0.43rem;
  background: #f7f7f7;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 0.43rem;
  font-size: 0;
  .title {
    font-size: 0.2rem;
  }
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0.24rem;
    height: 0.21rem;
  }
  .img_left {
    right: 0.51rem;
  }
  .img_right {
    right: 0.1rem;
  }
}
</style>
