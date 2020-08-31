<template>
  <div id="board">
    <div class="form">
      <el-form ref="form" :model="board" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="board.name"></el-input>
        </el-form-item>

        <el-form-item label="message">
          <el-input v-model="board.message"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>


export default {
  name: "Board",
  data() {
    return {
      commitdata: {},
      board: {
        name: "",
        message: "",
      },
    };
  },
  methods: {
    
    onSubmit() {
      console.log("submit!");
      this.$emit('showBoardData',this.board);


      
      // console.log(this.board.name)
      
      this.$message({
        showClose: true,
        message: "提交成功",
        type: "success",
      });
    },
  },

  
};
</script>


<style scoped>
</style>