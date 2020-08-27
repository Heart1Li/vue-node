# node_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 后端路由设计
|URL       |  请求方式  |  参数          | 处理方式      |
|----------|-----------|----------------|--------------|
| /        |   GET     | page           |返回文章数据   |
| /classfiy|   GET     | type           |返回分类数据   |
| /search  |   GET     | key            |返回查询数据   |
| /message |   GET     |                | 返回留言板数据|
| /login   |   POST    | email/password |处理登录请求   |
| /register|   POST    | formData       |  处理注册请求 |


