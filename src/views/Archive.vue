<template>
  <div id='Archive'>
    <ImgContainer> <div class="print">归档_</div></ImgContainer>
    <archive-content v-for="(item,index) in articleData" :key="index" archiveData="articleData" >
      <h4 class="archive-title">{{articleData[index].title}}</h4>
      <p class="archive-commit">{{articleData[index].author}} 提交于 {{articleData[index].time}}</p>
    </archive-content>
  </div>
</template>

<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import ArchiveContent from '../components/content/archive/ArchiveContent'

import getArticleData from "../network/article";
export default {
  name:'Archive',
  components:{
    ImgContainer,
    ArchiveContent,
  },
  data(){
    return {
      articleData:[]
    }
  },
  created(){
    getArticleData().then((res) => {
      // console.log(res.data);
      this.articleData = res.data;
    });
  }
}
</script>

<style scoped>
.block {
  margin: 0 18%;
  margin-top:-50px ;
}
</style>