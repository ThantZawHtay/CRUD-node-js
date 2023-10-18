const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/shop").then(console.log("connection success"));
const items=mongoose.Schema({
    name:{type:String ,require:true},
   quantity:{type:Number,require:true},
    price:{type:Number,require:true}
})
const minishop=mongoose.model("minishop",items);
module.exports=minishop;