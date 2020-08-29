import {request} from "./request";

export default function getArticleData(){
  return request({
    url: '/api/article'
  })
}

