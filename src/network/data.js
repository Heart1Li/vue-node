import {request} from "./request";

export default function getData(){
  // let formdata = new FormData();
  //   formdata.append("name", "li");
  //   formdata.append("age", "19");
  return request({
    url: '/find',
    method:'post',
    data:{
      name:'li',
      age:18,
    },
    params:{
      'id':123,
    }
  })
}

