const Koa=require("koa");
const path=require('path');
const session=require('koa-session');
const render=require('koa-art-template');
const app=new Koa();
const router=require("./routes");
const bodyParser=require("koa-bodyparser");
app.use(require('koa-static')(__dirname+'/public'));
app.use(bodyParser());
render(app,{
    root:path.join(__dirname,'views'),
    extname:".html"
});
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
app.on('error',function (err) {
    console.log(err.stack);
});