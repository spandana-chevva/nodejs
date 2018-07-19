var db=require('../dbconnection');

var Buyer={

    registerBuyer:function(data,callback){
        return db.query("Insert into buyers(`user_type`,`full_name`,`work_email`,`password`,`first_login`,`created_date`,`updated_date`) values(?,?,?,?,?,?,?)",[data.user_type,data.full_name,data.work_email,data.password,1,data.created_date,data.updated_date],callback);
    },

    updateBuyer:function(categories,buyer_id,updated_date,callback){
        return db.query("UPDATE buyers SET categories = ?, first_login = ?, updated_date = ? WHERE buyer_id = ?",[categories,0,updated_date,buyer_id],callback);
    },
};
module.exports=Buyer;








