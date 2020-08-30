<template>
  <div id="catrgory-view">
    <img-container>
    <div class="print">分类_{{this.$route.params.path}}</div>
    </img-container>
    <main-container></main-container>
  </div>
</template>

<script>
import ImgContainer from "../components/common/img_container/ImgContainer";
import MainContainer from "../components/common/container/MainContainer"
export default {
  name:'CategoryView',
  components:{
    ImgContainer,
    MainContainer,
  },
  created(){
    console.log(this.$route.params.path)
  }
}
</script>