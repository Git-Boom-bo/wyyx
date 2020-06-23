<template>
  <div class="tabbar">
    <router-link class="tabbar-item" to="/">
      <van-icon class="tabbar-item-i" name="wap-home-o" />
      <span class="tabbar-item-t">首页</span>
    </router-link>
    <!-- <div class="tabbar-item">
      <van-icon class="tabbar-item-i" name="wap-home-o" />
      <span class="tabbar-item-t">首页</span>
    </div>-->
    <router-link class="tabbar-item" to="/classify">
      <van-icon class="tabbar-item-i" name="apps-o" />
      <span class="tabbar-item-t">分类</span>
    </router-link>
    <!-- <div class="tabbar-item">
      <van-icon class="tabbar-item-i" name="apps-o" />
      <span class="tabbar-item-t">分类</span>
    </div>-->
    <router-link class="tabbar-item" to="/shopping">
      <van-icon class="tabbar-item-i" name="bag-o" />
      <span class="tabbar-item-t">值得买</span>
    </router-link>
    <!-- <div class="tabbar-item">
      <van-icon class="tabbar-item-i" name="bag-o" />
      <span class="tabbar-item-t">值得买</span>
    </div>-->
    <router-link class="tabbar-item" to="/car">
      <van-icon class="tabbar-item-i" name="shopping-cart-o" />
      <span class="tabbar-item-t">购物车</span>
    </router-link>
    <!-- <div class="tabbar-item">
      <van-icon class="tabbar-item-i" name="shopping-cart-o" />
      <span class="tabbar-item-t">购物车</span>
    </div>-->
    <router-link class="tabbar-item" to="/person">
      <van-icon class="tabbar-item-i" name="contact" />
      <span class="tabbar-item-t">个人</span>
    </router-link>
    <!-- <div class="tabbar-item">
      <van-icon class="tabbar-item-i" name="contact" />
      <span class="tabbar-item-t">个人</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang='less' scoped>
.tabbar {
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 98px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  // .active{
  //   color: red;
  // }
 .router-link-exact-active{
   color: red;
 }
  .tabbar-item {
    // .tabbar-item.active{
    //   color: rgb(179, 71, 71);
    // }
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
