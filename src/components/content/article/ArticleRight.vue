<template>
  <div class="article">
          <div class="article-img-container-1"></div>
          <div class="article-container-1">
            <header>
              <p class="article-title">1</p>
              <p class="article-time">{{article1.time}}</p>
            </header>
            <main>
              <p class="article-content">{{article1.contnet}}</p>
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
    article1:Object,
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

  .article-img-container-1 {
    /* display: inline-block; */

    float: right;
    width: 200px;
    height: 200px;
    background: url('../../../assets/img/photo.png');
    background-size: cover;
  }

  .article-container-1 {
    /* display: inline-block;
     */
    position: relative;
    float: left;
    height: 200px;
    width: calc(100% - 200px);
    background-color: white;
  }
.article-container-1 header{
    padding: 5% 0 0 5%;
    border-bottom: 1px solid #000;
  }
  .article-container-1 header p {
    display: inline-block;
    margin: 0;
    margin-right: 5%;
  }
  
  .article-container-1 footer {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }
</style>