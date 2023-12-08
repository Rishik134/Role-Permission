const { Sequelize, DataTypes,Op } = require("sequelize")
const db=require("../../model/db");

async function insertuser(username,password,token){
try{
    await db.sequelize.sync();
    const user = await db.User.create({username:username,password:password,token:token});
    const showuser=await db.User.findOne({
        where:{username:username},
        include:{model:db.Blog}
    })
    console.log(user);
    console.log("---------------");
    return showuser
}
catch(error){
    console.log("Error at signup",error)
}
}

async function loginuser(username,password){
    try{
        await db.sequelize.sync();
        const user = await db.User.findOne({
            where:{
                [Op.and]:[
                    {username:username},
                    {password:password}
                ]
            }
        })
        return user; 
    }
    catch(error){
        console.log("Error at Login",error);
    }
}

async function insertadmin(username,password,token){
    try{
        await db.sequelize.sync();
        const user = await db.User.create({username:username,password:password,role:1,token:token});
        const showuser=await db.User.findOne({
            where:{username:username}
        })
        console.log(user);
        console.log("---------------");
        return showuser
    }
    catch(error){
        console.log("Error at signup",error)
    }
    }
    
    async function loginadmin(username,password){
        try{
            await db.sequelize.sync();
            const user = await db.User.findOne({
                where:{
                    [Op.and]:[
                        {username:username},
                        {password:password},
                        {role:1},
                    ]
                }
            })
            return user; 
        }
        catch(error){
            console.log("Error at Login",error);
        }
    }

module.exports={
    insertuser,
    loginuser,
    loginadmin,
    insertadmin
    
}