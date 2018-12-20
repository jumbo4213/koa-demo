module.exports={
  async checkNotLogin(ctx,next){
      if(!ctx.session.user){
          return ctx.redirect("/login");
      }
      await next();
  },
  async checkLogin(ctx,next){
        if(ctx.session.user){
            return ctx.redirect("/");
        }
        await next();
  }
};