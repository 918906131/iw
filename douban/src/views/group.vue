<template>
  <div>
    <Header title="小组">
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
    <Group></Group>
    <div class="wall"></div>
  </div>
</template>
<script>
import Header from "./../components/header";
import Group from "./../components/grop";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Group,
  },
};
</script>

<style scoped lang="less">
.wall {
  height: 0.45rem;
}
</style>
