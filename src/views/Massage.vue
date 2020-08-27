<template>
  <div>
    <el-container>
        <el-main>
          <Content></Content>
          <Content></Content>
          <Content></Content>
        </el-main>
        <el-aside width="30%" style="background-color: rgb(238, 241, 246)">
          <el-card :body-style="{ padding: '0px'}">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-aside>
      </el-container>
  </div>
</template>

<script>
import Content from "../components/content";
export default {
  name:'Passage',
  components:{
    Content,
  }
}
</script>

<style scoped>

</style>>

