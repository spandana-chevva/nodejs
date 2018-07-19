var db=require('../dbconnection');

var Seller={

    registerSeller:function(data,callback){
        return db.query("Insert into sellers(`user_type`,`full_name`,`company_name`,`work_email`,`password`,`first_login`,`startup_type`,`created_date`,`updated_date`) values(?,?,?,?,?,?,?,?,?)",[data.user_type,data.fullname,data.company_name,data.work_email,data.password,1,data.startup_type,data.created_date,data.updated_date],callback);
    },

    updateSeller:function(categories,updated_date,seller_id,callback){
        return db.query("UPDATE sellers SET categories = ?, first_login = ?, updated_date = ? WHERE seller_id = ?",[categories,0,updated_date,seller_id],callback);
    },

    updateSellerInfo:function(supplier_info,seller_id,callback){
        return db.query("UPDATE sellers SET company_address = ?, warehouse_address = ?, seller_type = ?, credit_days = ?, incorporation_year = ?, tax_number = ?, annual_revenue = ?, updated_date = ? WHERE seller_id = ?",[supplier_info.company_address,supplier_info.warehouse_address,supplier_info.seller_type,supplier_info.credit_days,supplier_info.incorporation_year,supplier_info.tax_number,supplier_info.annual_revenue,supplier_info.updated_date,seller_id],callback);
    },

    getSellerCategoriesById:function(id,callback){
        return db.query("SELECT categories FROM sellers where seller_id = ?",[id], callback);
    },

    submitSupplierOffer:function(offer_data,callback){
        return db.query("Insert into supplier_offers(`request_id`,`offered_price`,`offered_delivery_date`,`remarks`,`offered_by`,`created_date`,`updated_date`) values(?,?,?,?,?,?,?)",[offer_data.request_id,offer_data.offered_price,offer_data.offered_delivery_date,offer_data.remarks,offer_data.offered_by,offer_data.created_date,offer_data.updated_date],callback);
    },

    getRFQsWithSupplierCategories:function(supp_category,callback){
        return db.query("SELECT * FROM request_for_quotation WHERE product_category LIKE ?", '%'+[supp_category]+'%', callback);
    },
};
module.exports=Seller;








