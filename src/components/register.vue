<template>
  <div class="from">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  data() {
    return {
      form: {
        name: "",
        password:"",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    postname() {
      axios({
        method: "get",
        url: "127.0.0.1:3000/register",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        data: Qs.stringify(this.input),
      });
    },
  },
};
</script>

<style scoped>
.el-form {
  width: 600px;
  margin: 0 auto;
  text-align: center;
}
.el-input {
  width: 36%;
}

</style>>

