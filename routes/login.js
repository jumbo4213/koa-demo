const router=require("koa-router")();
router.get("/",async (ctx)=>{
    console.log(ctx.session.user);
    ctx.body="登陆页";
});
module.exports=router.routes();