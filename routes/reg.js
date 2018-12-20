const User=require("../models/user");
module.exports={
    async index(ctx){
        await ctx.render("login",{type:true});
    },
    async signin(ctx){
        let username=ctx.request.body.username;
        let pwd=ctx.request.body.pwd;
        let t=await User.findUser(username);
        if(t.length!=0){
            await ctx.render('login',{userMsg:"用户名已存在",type:true});
        }else{
            let M_user={
                username:username,
                pwd:pwd
            };
            let result=await User.addUser(M_user);
            ctx.session.user=username;
            await ctx.redirect("/");
        }
    }
};