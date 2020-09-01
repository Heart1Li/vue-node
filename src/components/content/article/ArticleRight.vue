<template>
  <div class="article" @click="itemClick">
          <div class="article-img-container-1"></div>
          <div class="article-container-1">
            <header>
              <p class="article-title">1</p>
              <p class="article-time">{{contentRight.time}}</p>
            </header>
            <main>
              <p class="article-content">{{contentRight.contnet}}</p>
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
    path:String,
    contentRight:Object,
  },
   methods:{
    itemClick(){
      // console.log('1');
      this.$router.push(this.path).catch(err => {err});
    }
  },
}
</script>

<style scoped>
.article {
    /* background-color: pink; */
    width: 100%;
    height: 250px;
    margin-bottom: 5%;
    /* border-bottom: 1px solid #000; */
    border-radius: 10%;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    /* margin-bottom: 5px; */
  }

  .article-img-container-1 {
    /* display: inline-block; */

    float: right;
    width: 35%;
    height: 250px;
    background: url('../../../assets/img/photo.png');
    background-size: cover;
  }

  .article-container-1 {
    /* display: inline-block;
     */
    position: relative;
    float: left;
    height: 250px;
    width: calc(65%);
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