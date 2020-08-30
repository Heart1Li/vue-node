<template>
  <div class="block">
  <el-timeline>
    <el-timeline-item >
      <el-card>
        <slot></slot>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
</template>

<script>
export default {
  name:'ArchiveContent',
  props:{
    archiveData:{
      title:'',
      time:'',
      author:'',
    }
  }
}
</script>