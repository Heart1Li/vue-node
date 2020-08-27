<template>
  <div>
    <Content></Content>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button round>提交</el-button>
  </div>
</template>

<script>
import Content from '../components/content'
export default {
  name:'Comment',
  components:{
    Content,
  },
  data(){
    return {
      input:'',
    }
  }
}
</script>

<style scoped>

</style>>

