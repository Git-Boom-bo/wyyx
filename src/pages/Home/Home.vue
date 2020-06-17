<template>
  <div>
    <!-- 头部和导航 -->
    <div>
      <van-row class="nav-header">
        <van-col>
          <img class="header-logo" src="../../../public/images/logo.jpg" alt />
        </van-col>
        <van-col>
          <van-search class="header-search" placeholder="搜索商品，共4454款好物" />
        </van-col>
        <van-col>
          <button class="header-button">登录</button>
        </van-col>
      </van-row>
      <van-row class="nav-text">
        <van-col class="text" span="5">
          <span class="active">推荐</span>
        </van-col>
        <van-col class="text" span="5">
          <span>居家生活</span>
        </van-col>
        <van-col class="text" span="5">
          <span>服饰鞋包</span>
        </van-col>
        <van-col class="text" span="5">
          <span>美食酒水</span>
        </van-col>
        <van-col class="text" span="4">
          <van-icon name="arrow-down" />
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../public/images/swp1.webp" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/images/swp2.webp" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/images/swp3.webp" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/images/swp4.webp" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/images/swp5.webp" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/images/swp6.webp" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/images/swp7.webp" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../public/images/swp8.webp" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->
      </div>
    </div>
    <!-- grow -->
    <ul class="grow">
      <li class="items">
        <van-icon class="items-i" name="passed" />
        <span>网易自营品牌</span>
      </li>
      <li class="items">
        <van-icon class="items-i" name="underway-o" />
        <span>30天无忧退货</span>
      </li>
      <li class="items">
        <van-icon class="items-i" name="after-sale" />
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!-- 商品列表 -->
    <div class="shop-list">
      <div class="shop-flex">
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list1.png" alt />
          <span>新品首发</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list2.png" alt />
          <span>居家生活</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list3.png" alt />
          <span>服饰鞋包</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list4.png" alt />
          <span>美食酒水</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list5.png" alt />
          <span>个护清洁</span>
        </a>
      </div>
      <div class="shop-flex">
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list1.png" alt />
          <span>新品首发</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list2.png" alt />
          <span>居家生活</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list3.png" alt />
          <span>服饰鞋包</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list4.png" alt />
          <span>美食酒水</span>
        </a>
        <a class="shop-list-a" href="##">
          <img src="../../../public/images/shop-list5.png" alt />
          <span>个护清洁</span>
        </a>
      </div>
    </div>
    <!-- 新人优惠 -->
    <div class="new-person">
      <a href="##" class="new-person-top">
          <img src="../../../public/images/newPerson.png" alt="">
      </a>
      <a href="##" class="new-person-bottom">
        <img src="../../../public/images/newPerson2.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Home",

  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }
};
</script>

<style lang='less' scoped>
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
//轮播图
.banner {
  height: 296px;
  width: 100%;
  background: pink;
  img {
    height: 296px;
    width: 100%;
  }
}
//grow
.grow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 72px;
  // background: pink;
  line-height: 72px;
  .items {
    .items-i {
      font-size: 30px;
      color: red;
      margin-right: 10px;
    }
  }
}
//商品列表
.shop-list {
  width: 100%;
  height: 341px;
  // background: pink;
  .shop-flex {
    display: flex;
    justify-content: space-around;
    .shop-list-a {
      display: block;
      height: 156px;
      width: 110px;
      img {
        height: 110px;
        width: 110px;
      }
    }
  }
}
.new-person{
  height: 368px;
  width: 100%;
  // background: pink;
  a{
    display: block;
  }
}
</style>
