<template>
  <div class="all-content">
    <!-- 头部和导航 -->
    <van-row class="nav-header">
      <van-col>
        <img class="header-logo" src="../../../public/images/logo.jpg" alt />
      </van-col>
      <van-col>
        <van-search class="header-search" placeholder="搜索商品，共4454款好物" />
      </van-col>
      <router-link to="/login">
        <van-col >
          <button  class="header-button">登录</button>
        </van-col>
      </router-link>
    </van-row>
    <!-- 导航栏 -->
    <div class="nav" ref="nav">
      <ul class="list">
        <li class="item">
          <span>推荐</span>
        </li>
        <li class="item">
          <span>箱包服饰</span>
        </li>
        <li class="item">
          <span>居家生活</span>
        </li>
        <li class="item">
          <span>美食酒水</span>
        </li>
        <li class="item">
          <span>推荐</span>
        </li>
        <li class="item">
          <span>推荐</span>
        </li>
        <li class="item">
          <span>箱包服饰</span>
        </li>
        <li class="item">
          <span>居家生活</span>
        </li>
        <li class="item">
          <span>美食酒水</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Header",
  mounted() {
    let navScroll = new Bscroll(this.$refs.nav, {
      scrollX: true,
      click: true
    });
  },
  methods: {
    
  },
};
</script>

<style lang='less' scoped>
.all-content {
  position: fixed;
  z-index: 9;
  background: white;
  //头部
  .nav-header {
    height: 88px;
    // background: pink;
    .header-logo {
      height: 40px;
      width: 138px;
      margin: 25px 0 0 25px;
    }
    .header-search {
      width: 500px !important;
      height: 56px;
      margin-top: 18px;
    }
    .header-button {
      border: none;
      background-color: transparent;
      outline: none;
      color: #dd1a21;
      font-size: 25px;
      border: 1px solid #dd1a21;
      height: 40px;
      width: 70px;
      border-radius: 15%;
      margin-top: 25px;
    }
  }
  .nav-text {
    height: 60px;
    text-align: center;
    font-size: 28px;
    line-height: 60px;
    .text {
      padding: 0 20px;
    }
    .active::after {
      margin-top: -5px;
      content: "";
      display: block;
      border-bottom: 5px solid red;
    }
  }
  // 导航
  .nav {
    // width: 750px;
    height: 60px;
    // background: pink;
    .list {
      // width: 1000px;
      height: 60px;
      display: flex;
      .item {
        display: flex;
        // flex-wrap: nowrap;
        justify-content: center;
        font-size: 30px;
        margin: 0 15px;
        line-height: 60px;
        width: 140px;
        text-align: center;
      }
    }
  }
}
</style>
