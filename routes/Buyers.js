var express = require('express');
var router = express.Router();
var Buyer=require('../models/Buyer');
var multer = require('multer');
var nodemailer = require("nodemailer");

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};


var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './public/images'); 
    },
    filename: function (req, file, callback) {
      callback(null, Date.now() + "_" + file.originalname) 
    }
});

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "esco.track123@gmail.com",
        pass: "track123"
    }
});

var upload = multer({storage: storage}) //Field name and max count

router.post("/upload-buyer-profilepic", upload.array("uploads[]", 12), function (req, res) {
   if(req.files){
       return res.status(200).send({"success" : true, "message" : "Image uploaded", "data":req.files});
   }else{
       return res.status(200).json({ "success":false,  "message": "Error uploading file..." });
   }
});

router.post('/send-email',function(req,res){
    var mailOptions={
        to : 'spandana@teamalgorithm.com',
        subject : 'algorith test',
        text : 'Hi...!'
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
                return res.status(200).send({"success" : false, "message" : "Error sending email..."});
        }else{
                return res.status(200).send({"success" : true, "message" : "Email sent"});
            }
    });
});

router.post('/register-buyers',function(req,res){
    Buyer.registerBuyer(req.body.buyers_data[0], function(err,count){
        if(count){
               return res.status(200).send({"success" : true, "message" : "Data submitted", "lastInsertedId":count.insertId});
        }else{
           return res.status(200).json({ "success":false,  "message": err.message });
        }
    });
});

router.post('/update-buyer',function(req,res){
    Buyer.updateBuyer(req.body.categories,req.body.id,req.body.updated_date, function(err,count){
        if(count){
               return res.status(200).send({"success" : true, "message" : "Updated successfully"});
        }else{
           return res.status(200).json({ "success":false,  "message": err.message });
        }
    });
});

module.exports=router;
