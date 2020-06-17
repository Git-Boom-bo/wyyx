<template>
  <div id="app">
    <Home />
    <Classify/>
    <!-- tabbar -->
    <div class="tabbar">
      <div class="tabbar-item">
        <van-icon class="tabbar-item-i" name="wap-home-o" />
        <span class="tabbar-item-t">首页</span>
      </div>

      <div class="tabbar-item">
        <van-icon class="tabbar-item-i" name="apps-o" />
        <span class="tabbar-item-t">分类</span>
      </div>
      <div class="tabbar-item">
        <van-icon class="tabbar-item-i" name="bag-o" />
        <span class="tabbar-item-t">值得买</span>
      </div>
      <div class="tabbar-item">
        <van-icon class="tabbar-item-i" name="shopping-cart-o" />
        <span class="tabbar-item-t">购物车</span>
      </div>
      <div class="tabbar-item">
        <van-icon class="tabbar-item-i" name="contact" />
        <span class="tabbar-item-t">个人</span>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home/Home";
import Classify from './pages/Classify/Classify'
export default {
  name: "App",
  components: {
    //局部注册
    Home,
    Classify
  }
};
</script>

<style lang='less' scoped>
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 98px;
  width: 100%;
  // background: pink;
  display: flex;
  justify-content: space-around;
  .tabbar-item {
    margin-top: 10px;
    float: left;
    width: 70px;
    height: 80px;
    text-align: center;
    .tabbar-item-i {
      font-size: 40px;
    }
    .tabbar-item-t {
      display: inline-block;
      width: 72px;
      font-size: 20px;
    }
  }
}
</style>
