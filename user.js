const Helper=require("../Utils/helper");
const mongoose=require('mongoose');
const mini=require("../dbs/user");
const fs=require('fs');



const product=async(req,res)=>{
   try {
    const shop=await mini.create(req.body);
    res.status(200).json(shop);
   
   } catch (error) {
    res.status(500).json(error);
   }
}

const GetAll=async(req,res)=>{
    try {
       
        const Shop=await mini.find();
        res.status(200).json(Shop);
    } catch (error) {
        res.status(500).json(error);
    }
}
const search=async(req,res)=>{
    try {
       let id=req.params.id;
        const Idserach=await mini.findById(id);
        res.status(200).json(Idserach);
    } catch (error) {
        res.status(500).json(error);
    }
}

const con=async(req,res)=>{
    try {
        let id=req.params.id;
         const Idserach=await mini.findByIdAndUpdate(id,req.body);
         if(!Idserach){
            res.status(404).json({msg:`we cannot find ${id}`});
         }
         else{
            res.status(200).json(Idserach);
         }
        
     } catch (error) {
         res.status(500).json(error);
     }
    }


    //delete file
    const deletefile=async(req,res,filename)=>{
       filename= await req.body.filename;
       fs.unlinkSync(`./Gellary/${filename}`);
    }


module.exports={
    con,
    product,
    search ,
    GetAll,
    deletefile
}