const path=require("path");

const blogsend=(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/sendblog.html"));
}

const blogsee=(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/seeblog.html"));
    res.send("Hello from /blog/see");
}

const bloguser=(req,res)=>{
    //console.log(path.join(__dirname,"../view/userblog.html"))
    res.sendFile(path.join(__dirname,"../view/userblog.html"));
    
}

module.exports={
    blogsend,
    blogsee,
    bloguser
}