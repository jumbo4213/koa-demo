const router=require("koa-router")();
const login=require("./login");
const reg=require("./reg");
const check=require("./check");
router.get("/",check.checkNotLogin,async (ctx)=>{
    await ctx.render('index');
});
router.get("/login",check.checkLogin,login.index);
router.post("/login",login.login);
router.get("/reg",check.checkLogin,reg.index);
router.post("/reg",reg.signin);
module.exports=router;