const express=require("express");
const bodyParser=require("body-parser");
const sql=require("./model/dbfuns");
const posts=require("./controller/posts");
const authenticate=require("../authenticate-service/authenticate")
const config=require("../authenticate-service/config")

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

const usermoderator=(req,res)=>{
    res.sendFile(__dirname+"/views/usersmoderators.html");
}

app.get("/data/",usermoderator);

app.post("/data/send",posts.datasend)

app.post("/data/promoteuser/",posts.datapromoteuser);

app.post("/data/demotemoderator",posts.datademotemoderator);

app.listen(3002,()=>{
    console.log('listening on port http://localhost:3002');
})