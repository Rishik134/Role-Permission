const express=require("express");
const bodyParser=require("body-parser");

const post=require("./controller/posts")
const middleware=require("../authenticate-service/authenticate")
const config=require("../authenticate-service/config");
const view=require("./model/view")

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("static"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/view/index.html")
})

app.get("/user/",(req,res)=>{
    res.sendFile(__dirname+"/view/userlogin.html");
})

let user;
let id;
let token;

app.post("/user/signup",post.usersignup)

app.post("/user/login",post.userlogin);

app.get("/admin/",(req,res)=>{
    res.sendFile(__dirname+"/view/admin.html");
})

app.post("/admin/signup/",post.adminsignup);

app.post("/admin/login/",post.adminlogin)

app.get("/blog/redirectionpage",async(req,res)=>{
    try {
        
        const token1 = await config.Token11();
        middleware.authenticateUser(token1)(req,res,()=>{
            view.userredirect(req,res)
        })
    }
    //res.sendFile(__dirname+"/view/redirect.html")
    catch(error){
        console.log(error);
    }
})



app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})