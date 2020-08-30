<template>
  <div class="main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'MainContainer'
}
</script>

<style scoped>
  .main-container {
    min-height: 200px;
    margin: 0 18%;
    margin-top: -50px;
    background-color: white;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 2%;
  }
</style>