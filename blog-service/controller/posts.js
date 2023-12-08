const sql=require("../model/dbfuns")

const apiendpoint=(req,res)=>{
    console.log(req.body);
    id=req.body.userid
    role=req.body.role
    token=req.body.token
}

const blogsend=async(req,res)=>{
    const body=req.body;
    console.log(body);
    console.log("hello")
    const result=await sql.insertblog(body.blogTitle,body.blogContent,id)
    console.log(result);
    res.json(result)
}

const blogsee=async(req,res)=>{
    console.log(req.body);
    console.log("Hello")
    const data=await sql.showallblogs();
    console.log(data)
    res.json(data);
}

const bloguser=async(req,res)=>{
    const data=await sql.showuserblogs(id);
    console.log(data);
    res.json(data);
}

const blogdelete=async(req,res)=>{
    console.log(req.body);
    if (req.body.message>0){
        if (role<=2){
        const result=await sql.deleteblog(req.body.message);
        console.log(result);
        res.json({message:"deleted"})
        }
        else{
            res.json({message:"not allowed"})
            }
    }
    else{
        res.json({message:"Not deleted"});
    }
}

const selfdelete=async(req,res)=>{
    console.log(req.body);
    const result=await sql.deleteblog(req.body.message);
    console.log(result);
}

module.exports={
    blogsend,
    blogsee,
    bloguser,
    blogdelete,
    selfdelete,
    apiendpoint
}