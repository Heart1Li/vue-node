<template>
  <div id="ArticleView">
    <img-container>
    <div class="print">{{this.articleInfo.title}}</div>
    </img-container>
    <main-container>
      <div class="article-view">
        <h2>{{this.articleInfo.title}}</h2>
        <a>by {{this.articleInfo.author}}</a>
        <p>{{this.articleInfo.contnet}}</p>
      </div>
    </main-container>
  </div>
</template>


<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import MainContainer from '../components/common/container/MainContainer'

import {request} from '../network/request'
export default {
  name:'ArticleView',
  components:{
    ImgContainer,
    MainContainer,
  },
  data(){
    return {
      articleInfo:[]
    }
  },
  methods:{
    getArticleViewData(){
      return request({
        url:`/api/article/${this.$route.params.id}`,
        method:'get',
      })
    }
  },
  created(){
    // console.log(this.$route.params.id)
    this.getArticleViewData().then((res) => {
      console.log(res.data);
      this.articleInfo = res.data;
    });
  }
}
</script>


<style scoped>

</style>