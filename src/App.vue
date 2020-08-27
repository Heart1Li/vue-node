<template>
  <div id="app">
    <hearder-bar ></hearder-bar>
    <router-view/>
  </div>
</template>
<script>
import HearderBar from './components/herader-bar'
export default {
  name:'App',
  components:{
    HearderBar,
  }
}
</script>
<style scoped>
  @import url(./assets/css/normalize.css);

 #app {
     height: 100vh; 
  }
  

</style>>


