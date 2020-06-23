<template>
  <div class="all-content">
    <div class="content">
      <ul class="content-list">
        <li>
          <van-icon class="i" name="balance-list-o" />
          <p>我的订单</p>
        </li>
        <li>
          <van-icon class="i" name="calender-o" />
          <p>周六一起拼</p>
        </li>
        <li>
          <van-icon class="i" name="refund-o" />
          <p>售后服务</p>
        </li>
        <li>
          <van-icon class="i" name="balance-pay" />
          <p>邀请返利</p>
        </li>
        <li>
          <van-icon class="i" name="bag-o" />
          <p>优先购</p>
        </li>
        <li>
          <van-icon class="i" name="gold-coin-o" />
          <p>积分中心</p>
        </li>
        <li>
          <van-icon class="i" name="vip-card-o" />
          <p>会员俱乐部</p>
        </li>
        <li>
          <van-icon class="i" name="filter-o" />
          <p>地址管理</p>
        </li>
        <li>
          <van-icon class="i" name="passed" />
          <p>账号安全</p>
        </li>
        <li>
          <van-icon class="i" name="service-o" />
          <p>帮助与客服</p>
        </li>
        <li>
          <van-icon class="i" name="records" />
          <p>意见反馈</p>
        </li>
      </ul>
    </div>
    <button>退出登录</button>
  </div>
</template>

<script>
export default {
  name: "List"
};
</script>

<style lang='less' scoped>
.all-content {
    width: 100%;
    height: 1000px;
    // background: pink;
  .content {
    width: 100%;
    height: 723px;
    background: white;
    .content-list {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 249px;
        height: 180px;
        //   background: yellowgreen;
        text-align: center;
        border-right: 1px solid #f4f4f4;
        border-bottom: 1px solid #f4f4f4;
        box-sizing: border-box;
        .i {
          padding: 40px 0 10px 0;
          font-size: 60px;
        }
      }
    }
  }
  button{
      margin-top: 40px;
      width: 100%;
      height: 96px;
      background: white;
      border: none;
  }
}
</style>
