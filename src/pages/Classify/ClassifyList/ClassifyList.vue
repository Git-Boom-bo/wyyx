<template>
  <!-- 列表展示区 -->
  <div class="content">
    <div class="content-logo">
      <img class="content-logo-img" src="../../../../public/images/list-logo.webp" alt />
    </div>
    <div class="content-list">
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list1.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list2.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list3.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list4.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list5.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list6.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list7.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src="../../../../public/images/list8.webp" alt />
        <span class="content-list-txt">人气好物</span>
      </div>
      <div class="content-list-a">
        <img class="content-list-img" src alt />
        <span class="content-list-txt"></span>
      </div>
    </div>
    <!-- <p>query参数： {{$route.query.id}}</p> -->
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang='less' scoped>
.content {
  position: absolute;
  top: 116px;
  right: 30px;
  width: 528px;
  height: 872px;
  //   background: pink;
  .content-logo {
    .content-logo-img {
      width: 528px;
      height: 192px;
    }
  }
  .content-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 528px;
    height: 660px;
    // background: chartreuse;
    .content-list-img {
      margin-top: 20px;
      width: 144px;
      height: 144px;
    }
    .content-list-txt {
      display: inline-block;
      margin: 5px 25px 30px 25px;
    }
  }
}
</style>
