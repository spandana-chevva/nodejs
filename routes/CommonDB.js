var express = require('express');
var router = express.Router();
var Common=require('../models/Common');


router.get('/get-all-requests',function(req,res,next){
     Common.getAllRFQs(function(err,rows){
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

router.get('/get-requests-by-id/:id?',function(req,res,next){
     Common.getRequestsByBuyerId(req.params.id, function(err,rows){
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

router.get('/select-from-buyers/:email/:password?',function(req,res,next){
    Common.selectFromBuyer(req.params.email,req.params.password, function(err,rows){
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

router.get('/select-from-suppliers/:email/:password?',function(req,res,next){
    Common.selectFromSupplier(req.params.email,req.params.password, function(err,rows){
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

router.get('/select-from-admin/:email/:password?',function(req,res,next){
    Common.selectFromAdmin(req.params.email,req.params.password, function(err,rows){
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

router.get('/get-buyers-data-by-id/:id?',function(req,res,next){
     Common.getBuyersDataById(req.params.id, function(err,rows){
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

router.get('/get-sellers-data-by-id/:id?',function(req,res,next){
     Common.getSellersDataById(req.params.id, function(err,rows){
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

router.get('/get-prod-cat-by-buyer-id/:id?',function(req,res,next){
     Common.getCategoriesByBuyerId(req.params.id, function(err,rows){
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

router.get('/get-items-by-buyer-id/:id?',function(req,res,next){
     Common.getItemsByBuyerId(req.params.id, function(err,rows){
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

router.get('/get-admin-details-by-id/:id?',function(req,res,next){
    Common.getAdminDetailsById(req.params.id, function(err,rows){
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
