const Msg=async(res,msg="success",result=[])=>{
    
 res.status(200).json({
        con:true,
        msg,
        result
    });
}



module.exports={Msg};