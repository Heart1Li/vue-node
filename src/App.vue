<template>
  <div id="app">
    <NavBar ></NavBar>
    <router-view/>
    <Footer></Footer>
    <!-- <back-top></back-top> -->
  </div>
</template>
<script>
import NavBar from './components/content/navbar/NavBar'
import Footer from './components/content/footer/Footer'
// import BackTop from './components/common/backtop/BackTop'
export default {
  name:'App',
  components:{
    NavBar,
    Footer,
    // BackTop,
  }
}
</script>
<style scoped>
  @import url(./assets/css/normalize.css);

  #app {
    background-color:whitesmoke
  }
 
</style>>


