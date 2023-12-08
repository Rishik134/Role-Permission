const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors")

const config=require("../authenticate-service/config")
const posts=require("./controller/posts")
//const middleware=require("../authenticate-service/authenticate")
const { authenticateUser } = require('../authenticate-service/authenticate');
const view=require("./model/view")

const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

let id;
let role;
let token;

app.post("/api/endpoint",posts.apiendpoint)
app.get("/blog/send",view.blogsend)

app.post("/blog/send",posts.blogsend)

app.get("/blog/see/",view.blogsee)

app.post("/blog/see/",posts.blogsee);

//app.get("/blog/user/",middleware.authenticateUser,view.bloguser);
app.get("/blog/user/",view.bloguser)

app.post("/blog/user",posts.bloguser);

app.post("/blog/delete",posts.blogdelete);

app.post("/blog/selfdelete",posts.selfdelete);

app.listen(3001,()=>{
      console.log("server is running at http://localhost:3001")
})