<template>
  <div class="shoppig">
    <!-- 导航 -->
    <div class="nav">
      <van-icon class="nav-icon h" name="wap-home-o" />
      <span class="nav-txt">值得买</span>
      <van-icon class="nav-icon s" name="search" />
      <van-icon class="nav-icon c" name="shopping-cart-o" />
    </div>
    <!-- 内容区 -->
    <div class="content">
      <img class="bg" src="../../../public/images/shopping-bg.png" alt />
      <div class="zdm">
        <img class="zdm-img" src="../../../public/images/zdm.png" alt />
        <span class="zdm-txt">严选好物 用心生活</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping"
};
</script>

<style lang='less' scoped>

  
  // 导航
  .nav {
    width: 100%;
    height: 100px;
    background: pink;
    padding-top: 20px;
    box-sizing: border-box;
    .nav-icon {
      font-size: 50px;
    }
    .nav-txt {
      font-size: 38px;
      margin-left: 250px;
    }
    .nav-icon.h {
      margin-left: 20px;
    }
    .nav-icon.s {
      margin: 0 20px 0 170px;
    }
  }
  // 内容区
  .content {
    position: relative;
    .bg {
      height: 524px;
      width: 100%;
      z-index: -1;
    }
    .zdm {
      position: absolute;
      top: 50px;
      left: 10px;
      width: 100%;
      .zdm-img {
        width: 130px;
        height: 67px;
      }
      .zdm-txt {
        position: absolute;
        top: 22px;
        left: 130px;
        font-size: 30px;
        color: #fff;
      }
    }
  }
.shopping{
  -webkit-scrollbar{display:none}
}
</style>
