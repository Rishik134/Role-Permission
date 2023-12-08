const sql=require("../model/dbfuns")
const config=require("../../authenticate-service/config")
const axios=require("axios")
const dotenv=require("dotenv");
dotenv.config();
const jwt=require("jsonwebtoken")

const usersignup=async(req,res)=>{
    const body=req.body;
    //console.log(body)
    //console.log("Hello")
    console.log(body.signupUsername)
    console.log("Hello");
    const token = jwt.sign({ username: body.signupUsername }, JWT_SECRET_USER);
    const result=await sql.insertuser(body.signupUsername,body.signupPassword,token);
    console.log(result);
    res.json(result);
}

const userlogin=async (req,res)=>{
    const body=req.body;
    const result=await sql.loginuser(body.loginUsername,body.loginPassword);
    
    if(result){
        console.log(result.dataValues);
        sendDataToService1(result.dataValues)
        user=result.username;
        id=result.userid;
        token=result.token;
        await config.handleToken1(token)
        console.log(token);
        console.log("Done")
        res.redirect("/blog/redirectionpage");
    }
    else{
    res.json(result)
    }

}

async function sendDataToService1 (dataToSend)  {
    try {
      const response = await axios.post('http://localhost:3001/api/endpoint/', dataToSend);
  
      // Handle the response from the destination service
      console.log('Response from destination service:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending data:', error.message);
    }
  };

const adminsignup=async (req,res)=>{
    const body=req.body;
    console.log(body);
    const token = jwt.sign({ username: body.signupusername }, JWT_SECRET_ADMIN);
    const result = await sql.insertadmin(body.signupusername,body.signuppassword,token)
    console.log(result);
    res.redirect("http://localhost:3000/admin/")
}

const adminlogin=async (req,res)=>{
    const body=req.body;
    const result= await sql.loginadmin(body.loginusername,body.loginpassword);
    //console.log(result);
    if(result){
        console.log(result.dataValues)
        await config.handleToken2(result.token)
        sendDataToService1(result.dataValues)
        //res.json(result.dataValues)
        res.redirect("http://localhost:3002/data/")
    }
    else{
        res.json(result)
    }
}

module.exports={
    usersignup,
    userlogin,
    adminlogin,
    adminsignup,

}