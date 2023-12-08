const db=require("../../model/db");

const {Op}=require("sequelize");

async function showusermoderator(){
    try{
    await db.sequelize.sync();
    const users=await db.User.findAll({
        attributes:["userid","username"],
        where:{
            role:3
        }
    })
    const moderators=await db.User.findAll({
        attributes:["userid","username"],
        where:{
            role:2
        }
    })
    return {users,moderators}
}
catch(error){
    console.log('Error seding user and moderator names to admin', error);
}
}

async function promoteuser(userid){ 
    try{
    await db.sequelize.sync();
    const result=await db.User.update({role:2},{
        where:{
            userid:userid
        }
    })
    return result
}
catch(error){
    console.log('Error promoting the user to moderator', error);
}
}

async function demotemoderator(userid){ 
    try{
    await db.sequelize.sync();
    const result=await db.User.update({role:3},{
        where:{
            userid:userid
        }
    })
    return result
}
catch(error){
    console.log('Error demoting the moderator to user', error);
}
}

module.exports={
    showusermoderator,
    promoteuser,
    demotemoderator,
}