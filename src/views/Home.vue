<template>
  <div class="home">
  <img src="../assets/img/02.jpg" alt="" class="back">
  </div>
</template>

<script>
// @ is an alias to /src
import getHomeData from "../network/home";
import getData from "../network/data";
// import Register from "../components/register";
// import Content from "../components/content";
import axios from "axios";
export default {
  name: "Home",
  components: {
    // Register,
    // Content,
  },
  data() {
    return {
      currentDate: new Date(),
      users: {},
      data: {},
      test: {
        name: "li",
        age: 19,
      },
    };
  },
  created() {
    getHomeData().then((res) => {
      console.log(res.data);
      // console.log(res.data.age)
      this.users = res.data.User;
    });
    getData().then((res)=> {
      console.log(res.data);})
    //  getData().then((res) => {
    //     console.log(res.data);
    //     // console.log(res.data.age)
    //     this.data=res.data.User
    //   });
    

    // axios.post("url:127.0.0.1:3000/find", formdata).then((res) => {
    //   console.log("res", res);
    // });
  },
  methods: {},
};
</script>

<style scoped>
.home {
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.back {
  width: 100%;
  height: 500px;
}

</style>
