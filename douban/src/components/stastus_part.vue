<template>
  <div class="status_part">
    <img src="./../assets/img/audio/1.png" alt="" />
    <p>
      豆瓣
      <span>写了日记</span><br />
      <span>2018-05-23 10:39:23</span>
    </p>
    <div class="topic">
      <p>5月24日凌晨3:00~6:00豆瓣停机维护</p>
      <p>
        因业务发展需要,豆瓣计划于5月24日(星期四)凌晨3:00~6:00对服务器进行机房迁移,迁移期间全部豆瓣相关上单东南红艳艳
      </p>
    </div>
    <ul class="icon_comment">
      <li>
        <i class="el-icon-thumb"></i>
        <span>29</span>
      </li>
      <li><i class="el-icon-chat-line-square"></i><span>14</span></li>
      <li><i class="el-icon-refresh"></i><span>25</span></li>
    </ul>
    <i class="el-icon-more-outline"></i>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
.status_part {
  position: relative;
  height: 2.58rem;
  & > img {
    width: 0.4rem;
    position: absolute;
    left: 0.18rem;
    top: 0.2rem;
    height: 0.4rem;
  }
  & > p {
    font-size: 0.12rem;
    position: absolute;
    left: 0.68rem;
    top: 0.21rem;
    span {
      color: gray;
    }
  }
  .topic {
    position: absolute;
    left: 0.68rem;
    top: 0.71rem;
    padding-right: 0.16rem;
    background: rgba(117, 116, 116, 0.1);
    height: 1.24rem;
    width: 2.25rem;
    p {
      font-size: 0.12rem;
      margin-left: 0.16rem;
    }
    & > p:nth-of-type(1) {
      font-size: 0.13rem;
      margin-bottom: 0.11rem;
      margin-top: 0.2rem;
    }
    & > p:nth-of-type(2) {
      color: gray;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .icon_comment {
    font-size: 0;
    display: flex;
    left: 0.68rem;
    position: absolute;
    bottom: 0.22rem;
    li {
      margin-right: 0.22rem;
      i {
        font-size: 0.15rem;
        margin-right: 0.06rem;
      }
    }

    img {
      width: 0.14rem;
      height: 0.15rem;
    }
    span {
      font-size: 0.12rem;
    }
  }
  & > i {
    font-size: 0.15rem;
    right: 0.19rem;
    position: absolute;
    bottom: 0.22rem;
  }
}
</style>
