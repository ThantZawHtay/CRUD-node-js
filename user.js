const express=require('express');
const Firstuser=express();
const route=require("./routes/user");
require('dotenv').config();
const fileUpload = require('express-fileupload');


Firstuser.use(express.json());
Firstuser.use(fileUpload());

//middleware
const isUser=(req,res,next)=>{
    if(2!=0){
        req.message="user Pass gate one";
        next();
    }
}
const isAdmin=(req,res,next)=>{
console.log(req.message);
if(2==2){
    req.message="admin passs gate two";
    next();
}
}
Firstuser.get("/middleware",isUser,isAdmin,(req,res,next)=>{
    console.log(req.message);
    console.log("you are successful login");
})

///////middle ware end

// file upload
const savefile=async(req,res,next)=>{
let file=req.files.file;
console.log(file);
file.mv(`./Gellary/${file.name}`);
  
};

// files upload
const savefiles=async(req,res,next)=>{
    let Uploadfiles=req.files.files;
    console.log(Uploadfiles);
  
   
        
    
   
}

Firstuser.post("/gellary",savefile,(req,res)=>{

})
Firstuser.post("/gellarys",savefiles,(req,res)=>{
   

})


Firstuser.use("/users",route);




Firstuser.listen(`${process.env.PORT}`,console.log(`running ${process.env.PORT}`));

