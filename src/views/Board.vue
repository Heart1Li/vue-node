<template>
  <div id="massageboard">
    <ImgContainer> <div class="print">留言板_</div></ImgContainer>
    <main-container>
      <div>
        <div class="show-commit" v-for="(item,index) in commitData" :key="index">
        <p>{{item.name}} 说：</p>
        <p>{{item.message}}</p>
      </div>
      </div>
      
    </main-container>
    <Board @showBoardData="getData"></Board>
  </div>
</template>

<script>
import ImgContainer from '../components/common/img_container/ImgContainer'
import MainContainer from '../components/common/container/MainContainer'
import Board from '../components/content/massageboard/Board'

import { request } from "../network/request";
export default {
  name:'MassageBoard',
  components:{
    ImgContainer,
    MainContainer,
    Board,
  },
  data(){
    return {
      board:{
        name:'',
        message:''
      },
      commitData:[],
    }
  },
  methods:{
    getCommitData() {
      return request({
        url: "/api/commit",
        method: "get",
      });
    },
    postCommitData() {
      return request({
        url: "/api/commit/create",
        method: "post",
        data: this.board,
      });
    },

    getData(data){
      this.board.name = data.name
      this.board.message = data.message
      // console.log(data)
      console.log(this.board)
      this.postCommitData().then((res) => {
        console.log(res.data);
      });
      this.getCommitData().then((res) => {
      this.commitData = res.data
      });
    }
  },
  created() {
    this.getCommitData().then((res) => {
      this.commitData = res.data
        console.log(res.data);
        console.log(this.commitData);
      });
      
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
 .show-commit {
   border:1px solid #000;
   display: block;
   margin: 5%;
 }
</style>>

