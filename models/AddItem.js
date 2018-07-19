var db=require('../dbconnection');

var AddItem={

    addItem:function(data,callback){
        return db.query("Insert into request_for_quotation(`product_name`,`product_category`,`product_description`,`product_link`,`delivery_date`,`delivery_address`,`quantity`,`department`,`stage`,`budget`,`created_by`,`created_date`,`updated_date`) values(?,?,?,?,?,?,?,?,?,?,?,?,?)",[data.product_name,data.product_category,data.product_description,data.product_link,data.delivery_date,data.delivery_address,data.quantity,data.department,data.stage,data.budget,data.created_by,data.created_date,data.updated_date],callback);
    }

};
module.exports=AddItem;








