<template>
  <div class="article-container" @click="itemClick()">
    <h2>{{articleInfo.title}}</h2>
    <p>{{articleInfo.author}}</p>
    <p>{{articleInfo.contnet}}</p>
  </div>
</template>

<script>
export default {
  name:'ArticleContainer',
   props:{
    path:String,
    articleInfo:Object,
  },
  methods:{
    itemClick(){
      // console.log('1');
      this.$router.push(this.path).catch(err => {err});
    }
  },
  created(){
    // console.log(this.articleInfo)
  }
}
</script>

<style scoped>
  .article-container {
    margin: 0 5%;
    /* padding-top:5 ; */
    /* margin-top: 10%; */
    border: 1px solid #000;
    min-height: 150px;
    min-width: 200px;
    word-wrap: break-word;
  }
</style>


