const express = require("express");
const app = express();
const router = express.Router();
const path = __dirname + '/views/';


router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });
  
  router.get("/",function(req,res){
    res.sendFile(path + "home.html");
  });
  
  router.get("/services",function(req,res){
    res.sendFile(path + "services.html");
  });
  
  router.get("/contact",function(req,res){
    res.sendFile(path + "contact.html");
  });
  
  app.use("/",router);
  
  app.use("*",function(req,res){
    res.sendFile(path + "404.html");
  });
  
  app.listen(3000,function(){
    console.log("Live at Port 3000");
  });
  