import {request} from "./request";

export default function getData(){
  let formdata = new FormData();
    formdata.append("name", "li");
    formdata.append("age", "19");
  return request({
    url: '/find',
    method:'get',
    data:formdata,
  })
}

