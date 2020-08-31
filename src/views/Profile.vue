<template>
  <div id="profile">
    <ImgContainer>
      <div class="print">关于我_</div>
    </ImgContainer>
    <!-- <Register></Register> -->
    <main-container>
      <div class="about-me">
        <p>一个热爱生活努力学习的人</p>
        <div class="about-me-icon">
          <a class="iconfont icon-qq">
            <div class="qq-img"></div>
          </a>
          <a class="iconfont icon-wechat">
            <div class="wechat-img"></div>
          </a>
          <a href="https://github.com/Heart1Li" class="iconfont icon-github"></a>
        </div>
      </div>
    </main-container>
  </div>
</template>

<script>
import ImgContainer from "../components/common/img_container/ImgContainer";
import MainContainer from "../components/common/container/MainContainer";
// import Register from '../components/register'
export default {
  name: "Profile",
  components: {
    ImgContainer,
    MainContainer,
    // Register,
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 2rem;
  padding: 0 5%;
  margin-top: 5%;
}
.iconfont:hover {
  color: aquamarine;
  cursor: pointer;
}
.about-me-icon {
  display: flex;
  justify-content: space-between;
  /* text-decoration: none; */
}
.qq-img {
  background: url(../assets/img/qq.png);
  height: 150px;
  width: 150px;
  /* border: 1px solid #000; */
  background-size: cover;
  position: absolute;
  z-index: 23;
  border: 2px solid green;
  display: none;
}
.wechat-img {
  background: url(../assets/img/wechat.png);
  height: 150px;
  width: 150px;
  background-size: cover;
  position: absolute;
  z-index: 22;
  border: 2px solid green;
  display: none;
}
.icon-qq:hover .qq-img{
  display: block;
}

.icon-wechat:hover .wechat-img {
  display: block;
}

</style>>

