var express = require('express');
var router = express.Router();
var Seller=require('../models/Seller');

router.post('/register-sellers',function(req,res){
     Seller.registerSeller(req.body.sellers_data[0], function(err,count){
         if(count){
                return res.status(200).send({"success" : true, "message" : "Data submitted", "lastInsertedId":count.insertId});
         }else{
            return res.status(200).json({ "success":false,  "message": err.message });
         }
     });
});

router.post('/update-suppliers',function(req,res){
     Seller.updateSeller(req.body.categories,req.body.updated_date,req.body.id, function(err,count){
         if(count){
                return res.status(200).send({"success" : true, "message" : "Updated successfully"});
         }else{
            return res.status(200).json({ "success":false,  "message": err.message });
         }
     });
});

router.post('/update-supplier-info',function(req,res){
 
     Seller.updateSellerInfo(req.body.supplier_info[0],req.body.id, function(err,count){
         if(count){
            return res.status(200).send({"success" : true, "message" : "Updated successfully"});
         }else{
            return res.status(200).json({ "success":false,  "message": err.message });
         }
     });
});

router.post('/submit-supplier-offer',function(req,res){
    
    Seller.submitSupplierOffer(req.body.offer_data[0], function(err,count){
        if(count){
            return res.status(200).send({"success" : true, "message" : "submitted successfully"});
        }else{
            return res.status(200).json({ "success":false,  "message": err.message });
        }
    });
});

router.get('/get-supplier-categories-by-id/:id?',function(req,res,next){

     Seller.getSellerCategoriesById(req.params.id, function(err,rows){
       
        if(rows){
            if(rows.length){
                return res.status(200).send({"success" : true, "message" : "","data":rows});
            }
                return res.status(200).send({"success" : false, "message" : 'No data found'}); 
         }else{
            return res.status(200).json({ "success":false,  "message": err.message });
         }
     });
});

router.get('/get-rfqs-with-supp-categories/:supp_category?',function(req,res,next){

     Seller.getRFQsWithSupplierCategories(req.params.supp_category, function(err,rows){
         if(rows){
            if(rows.length){
                return res.status(200).send({"success" : true, "message" : "","data":rows});
            }
                return res.status(200).send({"success" : false, "message" : 'No data found'}); 
         }else{
            return res.status(200).json({ "success":false,  "message": err.message });
         }
     });
});

module.exports=router;
