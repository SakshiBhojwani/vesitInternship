const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://Sakshi:RNPSSA@cluster0.adailrl.mongodb.net/studentDB",{useNewUrlParser:true},mongoose.set('strictQuery',false));

const studSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    dob:String,
    address:String,
    phoneNo:Number
});
const Student=mongoose.model("student",studSchema)



app.get("/",function(req,res){

   res.redirect 
})
app.get("/info",function(req,res){
    res.render(studSchema,{firstName:firstName,lastName:lastName,dob:dob,adddress:address,phoneNo:phoneNo});
})
app.post("/",function(req,res){
    const newStud=req.body.newStudent;
    const newStudent=new Student({
        firstName:String,
    lastName:String,
    dob:String,
    address:String,
    phoneNo:Number
    })
    newStudent.save();
    res.redirect("/");
  
})

app.listen(3000,function(){
    console.log("server in running on port 3000");
});