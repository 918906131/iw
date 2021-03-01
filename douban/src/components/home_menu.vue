<template>
  <div id="home_menu">
    <div class="menu" v-for="item in lists" :key="item.id">
      <p>{{ item.title }}</p>
      <p>{{ item.target.desc }}</p>
      <p>作者:{{ item.target.author.name }}</p>
      <img :src="item.target.cover_url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style scoped lang="less">
#home_menu {
  font-size: 0;
  .menu {
    position: relative;
    padding-top: 0.36rem;
    border-bottom: 1px solid rgba(117, 116, 116, 0.3);
    p {
      font-size: 0.12rem;
      width: 1.91rem;
      margin-left: 0.13rem;
      color: gray;
    }
    & > p:nth-of-type(1) {
      color: black;
      margin-bottom: 0.13rem;
    }
    & > p:nth-of-type(3) {
      margin-top: 0.11rem;
      margin-bottom: 0.35rem;
    }
    img {
      position: absolute;
      right: 0.13rem;
      top: 0.32rem;
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
