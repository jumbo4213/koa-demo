const User=require("../models/user");
module.exports={
    async index(ctx){
    await ctx.render('login');
    },
    async login(ctx){
    let username=ctx.request.body.username;
    let pwd=ctx.request.body.pwd;
    let t=await User.findUser(username);
    if(t.length==0){
        ctx.body="用户名不存在";
        await ctx.render('login',{userMsg:"用户名不存在"});
        }else{
        let Rpwd=t[0].pwd;
        if(pwd==Rpwd){
                ctx.body="登陆成功";
                ctx.session.user=username;
                ctx.redirect('/');
            }else {
                //ctx.body="密码错误";
                await ctx.render('login',{pwdMsg:"密码错误"});
            }
        }
    }
};