<template>
  <div>
    <!-- 导航 -->
    <div class="nav">
      <van-icon @click="tohome" class="nav-icon h" name="wap-home-o" />
      <img class="nav-txt" src="../../../public/images/logo.png" alt />
      <van-icon class="nav-icon s" name="search" />
      <van-icon class="nav-icon c" name="shopping-cart-o" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="content-logo">
        <img src="../../../public/images/wyyx.png" alt />
      </div>
      <div>
        <button class="content-but">
          <van-icon class="icon" name="phone-o" />手机号快捷登录
        </button>
        <button class="content-but bottom">
          <van-icon class="icon bottom" name="envelop-o" />邮箱账号登录
        </button>
      </div>
      <div class="icons">
        <div class="icons-content">
          <span class="iconfont icon-gongzhonghao"></span>
          <span class="icons-txt">微信</span>
        </div>
        <i>|</i>
        <div class="icons-content">
          <span class="iconfont icon-QQ"></span>
          <span class="icons-txt">QQ</span>
        </div>
        <i>|</i>
        <div class="icons-content">
          <span class="iconfont icon-tubiaozhizuo-"></span>
          <span class="icons-txt">微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    tohome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang='less' scoped>
// 导航
.nav {
  width: 100%;
  height: 100px;
  // background: pink;
  padding-top: 20px;
  box-sizing: border-box;
  .nav-icon {
    font-size: 50px;
  }
  .nav-txt {
    display: inline-block;
    width: 170px;
    height: 50px;
    font-size: 38px;
    margin-left: 250px;
  }
  .nav-icon.h {
    margin-left: 20px;
  }
  .nav-icon.s {
    margin: 0 20px 0 120px;
  }
}
.content {
  z-index: 9;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 1234px;
  background: #f2f5f4;
  .content-logo {
    position: relative;
    width: 100%;
    height: 482px;
    // background: powderblue;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 268px;
      height: 90px;
    }
  }
  .content-but {
    margin-bottom: 40px;
    margin-left: 40px;
    position: relative;
    width: 670px;
    height: 94px;
    background: #dd1a21;
    border: 1px solid #dd1a21;
    line-height: 94px;
    color: white;
    font-size: 28px;
    .icon {
      position: absolute;
      top: 24px;
      left: 166px;
      font-size: 45px;
    }
  }
  .bottom {
    background: #f2f5f4;
    color: #dd1a21;
  }
  .icons {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 80px;
    left: 0;
    width: 100%;
    height: 40px;
    // background: pink;
    i{
        font-size: 30px;
        margin: 0 40px;
      }
    .icons-content {
      .iconfont{
        font-size: 38px;
      }
      .icons-txt {
        font-size: 28px;
        margin-left: 10px;
      }
    }
  }
}
</style>
