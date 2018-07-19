var express = require('express');
var router = express.Router();
var Admin=require('../models/Admin');

router.post('/register-admin',function(req,res){
     Admin.registerAdmin(req.body.admin_data[0], function(err,count){
         if(count){
                return res.status(200).send({"success" : true, "message" : "Data submitted", "lastInsertedId":count.insertId});
         }else{
            return res.status(200).json({ "success":false,  "message": err.message });
         }
     });
});

router.get('/get-supplier-offers/:request_id?',function(req,res,next){

     Admin.getSupplierOffers(req.params.request_id, function(err,rows){
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

router.get('/get-requests-for-admin',function(req,res,next){
    Admin.getRFQsForAdmin(function(err,rows){
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
