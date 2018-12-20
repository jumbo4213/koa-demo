const db=require("../lib/db");
class User{
    constructor(){

    }
    findUser(username){
        let sql=`select * from user where username="${username}"`;
        return db.query(sql);
    }
    addUser(mUser){
        let sql=`insert into user values(0,"${mUser.username}","${mUser.pwd}")`;
        //console.log(sql);
        return db.query(sql);
    }
}
module.exports=new User();