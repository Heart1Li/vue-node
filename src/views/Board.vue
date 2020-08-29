<template>
  <div id="massageboard">
    <ImgContainer> <div class="print">留言板_</div></ImgContainer>
    <Board></Board>
  </div>
</template>

<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import Board from '../components/content/massageboard/Board'
export default {
  name:'MassageBoard',
  components:{
    ImgContainer,
    Board,
  },
}
</script>

<style scoped>
 #board {
  margin: 0 18%;
  margin-top:-50px ;
 }
</style>>

