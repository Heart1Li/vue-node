<template>
  <div id="massageboard">
    <ImgContainer> <div class="print">留言板_</div></ImgContainer>
    <main-container></main-container>
    <Board></Board>
  </div>
</template>

<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import MainContainer from '../components/common/container/MainContainer'
import Board from '../components/content/massageboard/Board'
export default {
  name:'MassageBoard',
  components:{
    ImgContainer,
    MainContainer,
    Board,
  },
}
</script>

<style scoped>
 #board {
  margin: 0 18%;
  margin-top: 50px;
  background-color: white;;
  /* border: 1px solid #000; */
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
 }
 
</style>>

