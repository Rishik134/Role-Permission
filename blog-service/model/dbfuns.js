const { Sequelize, DataTypes,Op } = require("sequelize")

const db=require("../../model/db");

async function insertblog(title,blog,id){
    try{
        await db.sequelize.sync();
        const blogs=await db.Blog.create({title:title,blogs:blog,userid:id})
        return blogs
    }
    catch(error){
        console.log("Error at inserting blog",error);
    }
}

async function showallblogs(){
    try{
        await db.sequelize.sync();
        const result=await db.Blog.findAll({
            attributes:["title","blogs","blogid"],
            include:[{
                model:db.User,
                attributes:["username"]
        }]
        });
        return result;

    }
    catch(error){
        console.log("Error at showing all blogs",error);
    }
}

async function showuserblogs(id){
    try{
        await db.sequelize.sync();
        const result=await db.Blog.findAll({
            attributes:["title","blogs","blogid"],
            where:{userid:id}
        })
        return result;
    }
    catch(error){
        console.log("Error at showing user's blogs",error);
    }
}
async function deleteblog(id){
    try{
        await db.sequelize.sync();
        const result=await db.Blog.destroy({
            where:{blogid:id}
        })
        return result;
    }
    catch(error){
        console.log("Error at deleting a blog",error)
    }
}

module.exports={
    insertblog,
    showallblogs,
    showuserblogs,
    deleteblog
}