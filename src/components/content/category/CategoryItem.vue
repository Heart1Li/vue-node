<template>
  <div class="category-item" @click="itemClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'CategoryItem',
  props:{
    path:String,
  },
  methods:{
    itemClick(){
      // console.log('1')
      // console.log(this.path)
      this.$router.push(this.path).catch(err => {err})
      // this.isActive = true
    }
  },
 

}
</script>