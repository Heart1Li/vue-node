<template>
  <div class="article">
          <div class="article-img-container"></div>
          <div class="article-container">
            <header>
              <p class="article-title">1</p>
              <p class="article-time">{{contentLeft.time}}</p>
            </header>
            <main>
              <p class="article-content">{{contentLeft.contnet}}</p>
            </main>
            <footer>
              <button>详情</button>
            </footer>
          </div>
        </div>
</template>

<script>
export default {
  name:'ArticleLeft',
  props:{
    contentLeft:Object,
  }
}
</script>
<style scoped>
.article {
    /* background-color: pink; */
    width: 100%;
    height: 200px;
    margin-bottom: 3px;
    /* border-bottom: 1px solid #000; */
    border-radius: 10%;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    /* margin-bottom: 5px; */
  }

  .article-img-container {
    /* display: inline-block; */

    float: left;
    width: 200px;
    height: 200px;
    background: url('../../../assets/img/photo.png');
    background-size: cover;
  }

  .article-container {
    /* display: inline-block;
     */
    position: relative;
    float: right;
    height: 200px;
    width: calc(100% - 200px);
    background-color: white;
  }

  .article-container header{
    padding: 5% 0 0 5%;
    border-bottom: 1px solid #000;
  }
  .article-container header p {
    display: inline-block;
    margin: 0;
    margin-right: 5%;
  }
  .article-container main {
    margin: 2%;
    text-indent: 2em;
  }

  .article-container footer {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }

  
</style>>

