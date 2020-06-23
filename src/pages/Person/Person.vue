<template>
  <div class="all-content">
    <!-- 用户卡片 -->
    <div class="user">
      <div class="user-info">
        <img class="user-info-avatar" src="../../../public/images/avatar.png" alt />
        <div class="user-info-txt">
          <p>严选用户46554</p>
          <i>普通用户</i>
        </div>
      </div>
      <van-icon class="user-card" name="credit-pay" />
    </div>
    <!-- 我的资产 -->
    <div class="money">
      <div class="money-top">
        <p>我的资产</p>
      </div>
      <div class="money-bottom">
        <div class="money-bottom-item">
          <div class="money-bottom-item-txt">
            <div>
              <span>￥</span>
              <span class="number">0</span>
            </div>
            <p>回馈金</p>
          </div>
        </div>
        <div class="money-bottom-item">
          <div class="money-bottom-item-txt">
            <div>
              <span class="number">0</span>
            </div>
            <p>红包</p>
          </div>
        </div>
        <div class="money-bottom-item">
          <div class="money-bottom-item-txt">
            <div>
              <span class="number">0</span>
            </div>
            <p>优惠卷</p>
          </div>
        </div>
        <div class="money-bottom-item">
          <div class="money-bottom-item-txt">
            <div>
              <span>￥</span>
              <span class="number">0</span>
            </div>
            <p>津贴</p>
          </div>
        </div>
        <div class="money-bottom-item">
          <div class="money-bottom-item-txt">
            <div>
              <span class="number">0</span>
            </div>
            <p>礼品卡</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 列表内容 -->
    <List />
  </div>
</template>

<script>
import List from "./List/Lsit";
export default {
  name: "Person",
  components: {
    List
  }
};
</script>

<style lang='less' scoped>
.all-content {
    background: #F4F4F4;
    overflow: hidden;
  // 用户卡片
  .user {
    width: 100%;
    height: 270px;
    background: url("../../../public/images/avatar-bg.webp");
    .user-info {
      // position: relative;
      box-sizing: border-box;
      padding-top: 64px;
      padding-left: 30px;
      width: 510px;
      height: 270px;
      // background: pink;
      .user-info-avatar {
        display: inline-block;
        width: 142px;
        height: 142px;
        border-radius: 50%;
      }
      .user-info-txt {
        position: absolute;
        top: 100px;
        left: 200px;
        color: #fff;
        p {
          font-size: 35px;
        }
        i {
          font-size: 28px;
        }
      }
    }
    .user-card {
      position: absolute;
      right: 40px;
      top: 70px;
      font-size: 40px;
      color: rgb(209, 51, 51);
    }
  }
  //我的资产
  .money {
    width: 100%;
    height: 285px;
    background: #f4f4f4;
    .money-top {
      position: relative;
      height: 105px;
      line-height: 105px;
      font-size: 30px;
      background: white;
      p {
        padding-left: 25px;
      }
    }
    .money-top::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      background: #d9d9d9;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
    }
    .money-bottom {
      width: 100%;
      height: 160px;
      background: white;
      display: flex;
      .money-bottom-item {
        width: 160px;
        height: 160px;
        //   background: yellow;
        overflow: hidden;

        .money-bottom-item-txt {
          text-align: center;

          margin-top: 45px;
          div {
            font-weight: 700;
          }
          .number {
            font-size: 32px;
          }
        }
      }
    }
  }
}
</style>
