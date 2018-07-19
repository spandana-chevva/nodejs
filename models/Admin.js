var db=require('../dbconnection');

var Admin={

    getRFQsForAdmin: function(callback){
        return db.query("SELECT r. * , COUNT( so.request_id ) AS offer_received, b.full_name AS buyer_name FROM request_for_quotation r, supplier_offers so, buyers b WHERE r.request_id = so.request_id AND r.created_by = b.buyer_id GROUP BY so.request_id",callback);
    },

    registerAdmin:function(data,callback){
        return db.query("Insert into admin(`user_type`,`full_name`,`work_email`,`password`,`created_date`,`updated_date`) values(?,?,?,?,?,?)",[data.user_type,data.full_name,data.work_email,data.password,data.created_date,data.updated_date],callback);
    },

    getSupplierOffers:function(id,callback){
        return db.query("SELECT so. * , s.full_name AS supplier_name FROM supplier_offers so, sellers s WHERE so.request_id = ? AND so.offered_by = s.seller_id",[id], callback);
    }
};
module.exports=Admin;








