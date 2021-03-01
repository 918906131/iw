<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <slot name="slide"></slot>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        effect: this.effect,
        autoplay: {
          delay: this.delay,
          stopOnLastSlide: false,
        },
        pagination: {
          dynamicBullets: true,
          el: ".swiper-pagination",
          type: "fraction",
        },
      },
    };
  },
  props: {
    delay: {
      type: Number,
      default: 1000,
    },
    effect: {
      type: String,
      default: "slide",
    },
    fraction: {
      type: String,
      default: "fraction",
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  },
};
</script>

<style scoped lang="less">
</style>
