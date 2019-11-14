<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<style >
.wrapper {
  height: 100%;
}
</style>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //scroll 事件的配置项
      probeType: 1,
      click: true,
      tap: true
    });
  }
};
</script>