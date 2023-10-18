const routers=require ('express').Router();
const controller=require("../controller/user");
const mongoose=require('mongoose');

routers.put("/:id",controller.con);
routers.post("/insert",controller.product);
routers.get("/",controller.GetAll);
routers.get("/:id",controller.search);

routers.post("/delete",controller.deletefile);


module.exports=routers;