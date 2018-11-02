const mysql=require("mysql");
const config=require("./config");
const db={};
let connection=mysql.createConnection(config);
connection.connect(function (err,conn) {
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
});
db.query=function (sql) {
    return new Promise(function (resolve,reject) {
        connection.query(sql,function (err,rows) {
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })
    })
};
module.exports=db;

