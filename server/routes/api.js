var express= require('express');
var router = express.Router();
var mongoose = require("mongoose");

var schema=mongoose.Schema;
var mycolschema=new schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
});

mongoose.connect("mongodb://aarzu:rehana786@ds135427.mlab.com:35427/make",
{ useNewUrlParser: true},
(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Connected to mlab");
    }
}
);

router.get('/', function(req,res,next){
    var dbdata=mongoose.model('makeit', mycolschema);
    dbdata.find((err,data)=>{
        if(err){
            console.log("Error" + err);
        }
        else{
            res.json(data);
            console.log(data);
        }
    });
});

router.post('/', function(req,res,next){
    //     console.log("Post called "+ req.body);
    //     var obj = req.body;
    //     var dbdata = mongoose.model('makeit', mycolschema);
    //    var data =new dbdata(obj);
    //    data.save((err)=>{
    //        if(err) throw err;
    //    });
    
    //    dbdata.find((err, data)=>{
    //        if(err){
    //            console.log("Error "+err);
    //        }
    //        else{
    //            res.json(data);
    //            console.log(data);
    //        }
    //    });
    
    //    var objlength=Object.keys(obj).length;
    // }
    var obj = req.body;
      var objlength=Object.keys(obj).length;
    
    //   console.log("post call " +obj.firstname+ " " +obj.password);
      
      if(objlength>2){
      console.log("Matched the data stored is "+obj.firstname);
      console.log("The name and password is " + obj.firstname + " " + obj.password);  
    //   db1.savedata(obj);
    //   db2.savedata(obj);
    //     // var dbdata = mongoose.model('signup', mycolschema);
    //     // var data = new dbdata(obj);
    //     // data.save(function(err){
    //     //   if(err){
    //     //     console.log(err);
    //     //     return;
    //     //   }
    //     //   else{
    //     //     console.log("Inserted");
    //     //     return true;
    //     //   }
    //     // });
    
    
    
      }
    
      if(objlength==2){
        console.log("Authentication : " + obj.firstname + " " + obj.password);
      
        var authdata = mongoose.model('makeit', mycolschema);
        authdata.findOne({$and:[{firstname :obj.firstname}, {password :obj.password}]}, 
          (err, dt) =>{
          if(err){
            throw err;
          }
          else if(dt==null){
            console.log(JSON.stringify(dt));
            res.json(null);
          }
          else if(JSON.stringify(dt).length > 0){
            console.log("You are authenticated..." + dt );
            res.json(dt);
          }
          });
        }
        // db1.savedata(obj);
      }
    
    );

    module.exports=router;
    