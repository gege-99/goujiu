<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.flag"/>
  </div>
</template>


<script>
import TabBar from "@common/components/tabBar"
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>
<style lang="scss">
  .page{
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 0.5rem
  }
</style>
