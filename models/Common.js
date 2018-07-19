var db=require('../dbconnection');

var Common={

    getAllSuppliers:function(callback){

        return db.query("select DISTINCT Supplier from sample.products",callback);
    },

    getAllPOLs:function(callback){

        return db.query("SELECT DISTINCT `Port of Loading` as port_of_loading from sample.products where `Port of Loading` != ''",callback);
    },

    getAllPOs:function(callback){

        return db.query("SELECT DISTINCT `PO` as po_number from sample.products where `PO` != 'cancelled' AND `PO` != ''",callback);
    },

    getAllRFQs:function(callback){

        return db.query("SELECT * from request_for_quotation",callback);
    },

    getRequestsByBuyerId:function(id,callback){

        return db.query("SELECT * FROM request_for_quotation where created_by = ?",[id], callback);

    },

    getBuyersDataById:function(id,callback){

        return db.query("SELECT * FROM buyers where buyer_id = ?",[id], callback);

    },

    getSellersDataById:function(id,callback){

        return db.query("SELECT * FROM sellers where seller_id = ?",[id], callback);

    },

    getAdminDetailsById:function(id,callback){
        
        return db.query("SELECT * FROM admin where id = ?",[id], callback);
        
    },

    getCategoriesByBuyerId:function(id,callback){

        return db.query("SELECT categories FROM buyers where buyer_id = ?",[id], callback);

    },

    getItemsByBuyerId:function(id,callback){

        return db.query("SELECT * FROM request_for_quotation where created_by = ?",[id], callback);

    },

    selectFromBuyer:function(email,password,callback){
        return db.query("SELECT * FROM buyers where work_email = ? and password = ?",[email,password], callback);
    },

    selectFromSupplier:function(email,password,callback){
        return db.query("SELECT * FROM sellers where work_email = ? and password = ?",[email,password], callback);
    },

    selectFromAdmin:function(email,password,callback){
        return db.query("SELECT * FROM admin where work_email = ? and password = ?",[email,password], callback);
    }

};
module.exports=Common;








