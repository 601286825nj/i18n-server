import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import { getData } from './mongo.mjs';

let app = new Koa();
app.use(
  cors({
    origin: function (ctx) { //设置允许来自指定域名请求
      return '*'; // 允许来自所有域名请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);
app.use(bodyParser());

let router = Router();
router.post('/getI18n', async (ctx) => {
  // ctx.response.type = 'application/json; charset=utf-8';
  let param = ctx.request.body;
  ctx.response.body = {
    data: await getData(param)
  }
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(8081, () => {
  console.log('app listen 8081');
})