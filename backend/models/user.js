const mongoose=require("mongoose");
 const registationSchema= new mongoose.Schema({

   username:String,
    mobilenumber:Number,
    email:String,
    password:String

 })
 module.exports= mongoose.model("registation",registationSchema)