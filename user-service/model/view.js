const path=require("path")

const userredirect=(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/redirect.html"));
}

module.exports={
    userredirect
}