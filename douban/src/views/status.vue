<template>
  <div id="status">
    <Header title="广播">
      <template slot="img_left">
        <img
          src="./../assets/img/broadcast/ic_status_search_user.png"
          class="img_left"
        />
      </template>
      <template slot="img_right">
        <img
          src="./../assets/img/broadcast/ic_chat_green.png"
          class="img_right"
        />
      </template>
    </Header>
    <div class="login">
      <img src="./../assets/img/audio/user_normal.jpg" alt="" />
      <span>登录发广播</span>
    </div>
    <Status_part></Status_part>
    <Status_part></Status_part>
    <Status_part></Status_part>
    <div class="wall"></div>
  </div>
</template>
<script>
import Header from "./../components/header";
import Status_part from "./../components/stastus_part";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  
  components: {
    Header,
    Status_part,
  },
};
</script>

<style scoped lang="less">
.login {
  height: 0.61rem;
  font-size: 0;
  color: gray;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(117, 116, 116, 0.3);
  img {
    width: 0.4rem;
    margin-left: 0.18rem;
    height: 0.4rem;
    border-radius: 50% 50%;
  }
  span {
    font-size: 0.12rem;
    margin-left: 0.1rem;
  }
}
.wall{
  height: .48rem;
}
</style>
