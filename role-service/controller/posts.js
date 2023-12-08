const sql=require("../model/dbfuns")

const datasend=async(req,res)=>{
    const result=await sql.showusermoderator()
    console.log(result);
    res.json(result);
}

const datapromoteuser=async(req,res)=>{
    userid=req.body.message;
    console.log(userid)
    const result=await sql.promoteuser(userid)
    console.log(result);
    res.json({message:result});
}

const datademotemoderator=async(req,res)=>{
    const userid=req.body.message;
    const result=await sql.demotemoderator(userid);
    console.log(result);
    res.json({message:result});

}

module.exports={
    datasend,
    datapromoteuser,
    datademotemoderator
}