<template>
  <div id="App">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    Footer,
  },
};
</script>

<style scoped lang="less">
html,body,#App{
  width: 100%;
  height: 100%;
}
</style>
