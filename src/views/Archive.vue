<template>
  <div id='Archive'>
    <ImgContainer> <div class="print">归档_</div></ImgContainer>
    <archive-content></archive-content>
  </div>
</template>

<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import ArchiveContent from '../components/content/archive/ArchiveContent'
export default {
  name:'Archive',
  components:{
    ImgContainer,
    ArchiveContent,
  }
}
</script>

<style scoped>
.block {
  margin: 0 18%;
  margin-top:-50px ;
}
</style>