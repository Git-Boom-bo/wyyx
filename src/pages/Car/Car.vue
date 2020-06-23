<template>
  <div>
    <!-- 导航 -->
    <div class="nav">
      <span class="nav-car">购物车</span>
      <span class="nav-ticket">领卷</span>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="content-nav">
        <ul class="content-list">
          <span class="content-item">30天无忧退货</span>
          <span class="content-item">48小时快速退款</span>
          <span class="content-item">满90元免邮费</span>
        </ul>
      </div>
      <div class="content-text">
        <img class="content-text-bg" src="../../../public/images/car-bg.webp" alt />
        <button class="content-text-but">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car"
};
</script>

<style lang='less' scoped>
.nav {
  width: 100%;
  height: 88px;
  // background: pink;
  .nav-car {
    font-size: 35px;
    line-height: 88px;
    margin-left: 25px;
  }
  .nav-ticket {
    position: absolute;
    top: 22px;
    right: 50px;
    font-size: 32px;
    color: #dd1a21;
  }
}
//内容
.content {
  width: 100%;
  height: 1148px;
  background: #f4f4f4;
  .content-nav {
    width: 100%;
    background: #eeeeee;
    .content-list {
      height: 70px;
      line-height: 70px;
      display: flex;
      justify-content: space-around;
      font-size: 24px;
    }
  }
  .content-text {
    // height: 500px;
    .content-text-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 248px;
      height: 248px;
    }
    .content-text-but {
      position: absolute;
      bottom: 420px;
      left: 150px;
      width: 480px;
      height: 92px;
      font-size: 30px;
      color: #fff;
      background: #DD1A21;
      border: none;
    }
  }
}
</style>
