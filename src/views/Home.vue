<template>
  <div id="home">
    <ImgContainer>
      <div class="print">首页_</div>
    </ImgContainer>
    <main class="main">
      <div class="left">
        <div v-if="article">
          <article-left
          v-for="item in this.article"
          :key="item.id"
          :contentLeft="item"
          :path="`/article/${item._id}`"
        ></article-left>
        </div>
        
        <!-- <article-right
          v-if="article[1]"
          :contentRight="article[1]"
          :path="`/article/${article[1]._id}`"
        ></article-right> -->
      </div>
      <div class="right">
        <div id="component-time" class="component">组件一</div>
        <!-- <div id="component-category" class="component">组件二</div> -->
      </div>
    </main>
  </div>
</template>

<script>
import ImgContainer from "../components/common/img_container/ImgContainer";
import articleLeft from "../components/content/article/ArticleLeft";
// import articleRight from "../components/content/article/ArticleRight";
// @ is an alias to /src
import getArticleData from "../network/article";
// import getData from "../network/data";

export default {
  name: "Home",
  components: {
    ImgContainer,
    articleLeft,
    // articleRight,
  },
  data() {
    return {
      isShow:false,
      article: [],
      currentDate: new Date(),
      // users: {},
      // data: {},
    };
  },
  computed:{
  },

  methods: {
  },
  created() {
    getArticleData().then((res) => {
      // console.log(res.data);
      this.article = res.data;
    });
    
    // getData().then((res) => {
    //   console.log(res.data);
    // });
  },
  mounted(){
    // console.log(article[0])
  }
 
};
</script>

<style scoped>
.main {
  /* border: 1px solid #000; */
  display: flex;
  /* width: 100%; */

  min-height: 500px;
  margin: -50px 8% 0 8%;
  margin-top: -50px;
}

.main .left {
  flex: 2;
  width: 100%;
  min-height: 200px;
  min-width: 500px;
  /* background-color: white; */
  margin-right: 5%;
}

.main .right {
  background-color: white;
  min-height: 200px;
  min-width: 250px;
  /* margin-left: 5%; */
}

.component {
  min-height: 250px;
  background-color: white;
  margin-bottom: 15%;
  border-radius: 5%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
