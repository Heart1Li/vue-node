<template>
  <div id="catrgory-view">
    <img-container>
    <div class="print">分类_{{this.$route.params.path}}</div>
    </img-container>
    <main-container>
      <div class="category-info-view" v-if="isfind">
          <article-container   v-for="(item,index) in categoryInfo" :key="item._id" :path="`/article/${categoryInfo[index]._id}`" :articleInfo="categoryInfo[index]" ></article-container>
      </div> 
      <div class="error-message" v-else>
          没有找到对应类别的内容
      </div>
    </main-container>
  </div>
</template>

<script>
import ImgContainer from "../components/common/img_container/ImgContainer";
import MainContainer from "../components/common/container/MainContainer"
import ArticleContainer from "../components/content/article/ArticleContainer"


import {request} from '../network/request'
export default {
  name:'CategoryView',
  components:{
    ImgContainer,
    MainContainer,
    ArticleContainer,
  },
  data(){
    return {
      isfind:false,
      categoryInfo:[]
    }
  },
  methods:{
    getCategoryViewData(){
      return request({
        url:`/api/category/${this.$route.params.path}`,
        method:'get',
      })
    }
  },
  created(){
    this.getCategoryViewData().then((res) =>{
      // console.log(res.data)
      if(res.data.length != 0){
        this.isfind = true
        this.categoryInfo = res.data
      }

    })
    // console.log(this.$route.params.path)
  }
}
</script>