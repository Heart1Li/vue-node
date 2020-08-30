<template>
  <div id="category">
    <ImgContainer> <div class="print">分类_</div></ImgContainer>
    <category-content></category-content>
  </div>
</template>

<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import CategoryContent from '../components/content/category/CategoryContent'
export default {
  name:'Category',
  components:{
    ImgContainer,
    CategoryContent,
  }
}
</script>