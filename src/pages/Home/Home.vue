<template>
  <div>
    <div>
      <Header />
      <div class="main">
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
            <img src="../../../public/images/newPerson.png" alt />
          </a>
          <a href="##" class="new-person-bottom">
            <img src="../../../public/images/newPerson2.png" alt />
          </a>
        </div>
        <!-- 底部 -->
        <div class="bottom">
          <div class="bottom-button">
            <p>下载APP</p>
            <p style="margin-left: 30px;">电脑版</p>
          </div>
          <span>
            网易公司版权所有 © 1997-2020<br/>
            食品经营许可证：JY13301080111719
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper";
import "swiper/css/swiper.min.css";
// import BScroll from "better-scroll";
import Header from "../../components/Header/Header";
export default {
  name: "Home",
  components: {
    Header
  }
};
</script>

<style lang='less' scoped>
.main {
  position: absolute;
  top: 148px;
  left: 0;
  padding-bottom: 98px;
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
  //新人优惠
  .new-person {
    height: 368px;
    width: 100%;
    // background: pink;
    a {
      display: block;
    }
  }
  //底部
  .bottom {
    width: 100%;
    height: 244px;
    background: #414141;
    overflow: hidden;
    position: relative;
    .bottom-button{
      // width: 300px;
      color: white;
      display: flex;
      justify-content: center;
      margin-top:50px ;
      p{
        line-height: 62px;
        text-align: center;
        width: 172px;
        height: 62px;
        border: 1px solid #838383;
      }
    }
    span{
      position: absolute;
      bottom: 40px;
      left: 180px;
      color: #838383;
      // display: inline-block;
      text-align: center;
    }
  }
}
</style>
