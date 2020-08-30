<template>
  <nav id="navbar">
    <div class="nav-bar-container">
      <a href="#" class="nav-brand"><strong>LOGO</strong>
      </a>
      <div class="nav-collapse">
        <ul>
          <nav-bar-item path="/home">
            <a href="#" class="nav-item" >首页</a>
          </nav-bar-item>

          <nav-bar-item path="/archive">
            <a href="#" class="nav-item" >归档</a>
          </nav-bar-item>

          <nav-bar-item path="/category">
            <a href="#" class="nav-item" >分类</a>
          </nav-bar-item>
          
          <nav-bar-item path="/board">
            <a href="#" class="nav-item" >留言板</a>
          </nav-bar-item>
          
          <nav-bar-item path="/profile">
            <a href="#" class="nav-item" >关于我</a>
          </nav-bar-item>
          <!-- <nav-bar-item>
            <a href="#" class="nav-item">搜索</a>
          </nav-bar-item> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarItem from "./NavBarItem";
export default {
  name: "NavBar",
  components: {
    NavBarItem,
  },
};
</script>
<style  scoped>
#navbar {
  /* border: 1px solid #000; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  /* width: 100%; */
  height: 40px;
  padding: 12px 16px;
  /* background-color:whitesmoke; */
  /* z-index: 999; */
  /* background-color: darkgrey; */
  /* line-height: 40px; */
}

.nav-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5%;
  height: 40px;
}

.nav-brand {
  padding: 5px 0;
  margin-right: 16px;
  text-decoration: none;
  font-size: 1.25rem;
  color: black;
}

.nav-collapse {
  font-weight: 300;
  margin-right: 10px;
}

.nav-collapse li {
  display: inline-block;
  margin: 0 8px;
}

.nav-collapse a {
  text-decoration: none;
  color: black;
  font-size: 0.875rem;
}
</style>