<template>
  <main class="category-content">
    <category-tags>
      <category-item path="/category/vue">
        <a href="#" class="category-tag">Vue</a>
      </category-item>
      <category-item path="/category/javascript">
        <a href="#" class="category-tag">JavaScript</a>
      </category-item>
      <category-item path="/category/nodejs">
        <a href="#" class="category-tag">NodeJs</a>
      </category-item>
      <category-item path="/category/设计模式">
        <a href="#" class="category-tag">设计模式</a>
      </category-item>
      <category-item path="/category/随笔">
        <a href="#" class="category-tag">随笔</a>
      </category-item>
    </category-tags>
  </main>
</template>

<script>
import CategoryTags from "./CategoryTags";
import CategoryItem from "./CategoryItem";
export default {
  name: "CategoryContent",
  components: {
    CategoryTags,
    CategoryItem,
  },
};
</script>
<style scoped>
.category-content {
  display: grid;
  margin: 0 20%;
  margin-top: -50px;
  min-height: 200px;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 1%;
}
.category-tag-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: auto;
  width: 40%;
  height: 150px;
  
  /* background-color: pink; */
}
.category-item {
padding: 0 3%;
}
.category-tag {
  font-size: 1.25rem;
  padding: 0;
  text-decoration: none;
}
</style>