<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <van-search class="search-text" placeholder="搜索商品，共126516件" />
    </div>
    <!-- 导航 -->
    <div class="nav " ref="nav">
      <ul class="nav-list">
        
        <li class="item">
          <router-link to="/classify/classifyList?id=111" class="text" href="##">爆品专区</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">新品专区</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">居家生活</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">服饰鞋包</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">美食酒水</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">个护清洁</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">母婴亲子</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">运动旅行</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">数码家电</router-link>
        </li>
        <li class="item">
          <router-link to="/classify/classifyList" class="text" href="##">严选全球</router-link>
        </li>
        
      </ul>
    </div>
    <!-- 列表展示 -->
    <!-- <ClassifyList /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import ClassifyList from './ClassifyList/ClassifyList'
export default {
  name: "Classify",
  components: {
    // ClassifyList,
  },
  mounted() {
    let navScroll = new BScroll(this.$refs.nav)
  },
};
</script>

<style lang='less' scoped>
.search {
  position: relative;
  .search-text {
    width: 100%;
    height: 88px;
  }
}
.search::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  background: #d9d9d9;
  width: 100%;
  height: 1px;
}

.nav {
  position: relative;
  width: 162px;
  height: 1148px;
  .nav-list {
    // overflow: hidden;
    width: 162px;
    // height: 1030px;
    // background: pink;
    .item {
      position: relative;
      font-size: 28px;
      margin-top: 40px;
      text-align: center;
      .text {
        display: block;
        height: 50px;
        line-height: 50px;
      }
      .active::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background: #ab2b2b;
        width: 5px;
        height: 48px;
      }
    }
  }
}
.nav::after{
    position: absolute;
    top: 0;
    left: 162px;
    content: "";
    height: 1148px;
    width: 1px;
    background: #d9d9d9;
  }
</style>
