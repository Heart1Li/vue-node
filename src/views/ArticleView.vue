<template>
  <div id="ArticleView">
    <img-container>
    <div class="print">fgfg</div>
    </img-container>
    <!-- <main-container></main-container> -->
  </div>
</template>


<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
// import MainContainer from '../components/common/container/MainContainer'

import {request} from '../network/request'
export default {
  name:'ArticleView',
  components:{
    ImgContainer,
    // MainContainer,
  },
  methods:{
    getArticleViewData(){
      return request({
        url:'',
        
      })
    }
  },
  created(){
    console.log(this.$route)
  }
}
</script>


<style scoped>

</style>