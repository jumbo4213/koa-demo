const router=require("koa-router")();
router.get("/",async (ctx)=>{
    ctx.body="首页1";
    ctx.session.user="jumbo";
});
router.use("/login",require("./login"));
module.exports=router;