<template>
  <div class="img-container">
   <slot></slot>
  </div>
</template>


<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76%;
  height: 350px;
  border: 1px solid pink;
  margin: 0 auto;
  margin-top: 74px;
  background: url("../../../assets/img/photo.png");
  background-size: cover;
}

.img-container .print {
  width: 50%;
  height: 200px;
  text-align: center;
  line-height: 200px;
  color: white;
  font-size: 1.75rem;
  margin: auto;
}
</style>