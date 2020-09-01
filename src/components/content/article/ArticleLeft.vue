<template>
  <div class="article" @click="itemClick">
          <div class="article-img-container"></div>
          <div class="article-container">
            <header>
              <p class="article-title">{{contentLeft.title}}</p>
              <p class="article-time">{{contentLeft.time}}</p>
            </header>
            <main>
              <p class="article-content">{{contentLeft.contnet}}</p>
            </main>
          </div>
        </div>
</template>

<script>
export default {
  name:'ArticleLeft',
  props:{
    path:String,
    contentLeft:Object,
  },
  methods:{
    itemClick(){
      // console.log('1');
      this.$router.push(this.path).catch(err => {err});
    }
  }
}
</script>
<style scoped>
.article {
    /* background-color: pink; */
    width: 100%;
    height: 250px;
    margin-bottom: 5%;
    /* border-bottom: 1px solid #000; */
    /* border-radius: 5px; */
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    /* margin-bottom: 5px; */
  }
  .article:hover {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.26), 0 5px 20px 0 rgba(0,0,0,0.22);
    animation: articlemove 1s forwards;
    cursor: pointer;
    /* margin-left: -50px 1s; */
  }

  .article-img-container {
    /* display: inline-block; */

    float: left;
    width: 35%;
    height: 250px;
    background: url('../../../assets/img/photo.png');
    background-size: cover;
    /* padding-right: 50px; */
  }

  .article-container {
    /* display: inline-block;
     */
    position: relative;
    float: right;
    height: 250px;
    width: calc(65%);
    background-color: white;
  }

  .article-container header{
    padding: 10% 0 0 10%;
    font-size:1.5rem;
    /* border-bottom: 1px solid #000; */
  }
  .article-container header p {
    /* display: inline-block; */
    margin: 0;
    margin-right: 15%;
  }
  .article-container main {
    margin: 5% 0 0 10%;
    text-indent: 2em;
  }

  @keyframes articlemove {
    0% {
      margin-left:0px ;
    }
    100% {
      margin-left:-5px ;
    }
  }

  
</style>>

