<template>
  <div id="app">
    <router-view></router-view>
    <!-- tabbar -->
    <Footer/>
  </div>
</template>

<script>

import Footer from './components/Footer/Footer';
export default {
  name: "App",
  components: {
    //局部注册
    Footer,
    
  }
};
</script>

<style lang='less' scoped>

</style>
