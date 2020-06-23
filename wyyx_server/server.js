let Koa =require('koa')
let KoaRouter = require('koa-router')
//koa框架  用来搭建服务器 和express一样

//1.生成应用实例  express不用生成
const app = new Koa()
const router =new KoaRouter()
//3.注册路由
//3.1使用中间件
app .use(router.routes())//声明使用路由
    .use(router.allowedMethods())//声明使用路由的方法

//3.2注册路由
router.get('/test',(ctx,next)=>{
    console.log(111)
    console.log(ctx.query)
    ctx.body='koa测试返回的数据'
})

//注册返回主要数据的接口
let indexData = require('./datas/index.json')
router.get('/indexdata',(ctx,next)=>{
    ctx.body = indexData
})


//2.监听端口
app.listen('3002',(err)=>{
    if(err){
        console.log('服务器启动失败')
        console.log(err)
    }else{
        console.log('服务器启动成功')
        console.log('服务器地址：http//localhost:3002')
    }
}) 