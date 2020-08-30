<template>
  <div id="profile">
    <ImgContainer> <div class="print">关于我_</div></ImgContainer>
    <!-- <Register></Register> -->
    <main-container></main-container>
  </div>
</template>

<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import MainContainer from '../components/common/container/MainContainer'
// import Register from '../components/register'
export default {
  name:'Profile',
  components:{
    ImgContainer,
    MainContainer
    // Register,
  }
}
</script>

<style scoped>

</style>>

