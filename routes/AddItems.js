var express = require('express');
var router = express.Router();
var AddItem=require('../models/AddItem');

router.post('/request-for-quotation',function(req,res){
     AddItem.addItem(req.body.product_data[0], function(err,count){
         if(count){
                return res.status(200).send({"success" : true, "message" : "Item added"});
         }else{
            return res.status(200).json({ "success":false,  "message": err.message });
         }
     });
});



module.exports=router;
