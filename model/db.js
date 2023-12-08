const { Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize(
    'blogs',
    'root',
    'rishik2184',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );


const User = sequelize.define("users", {
    userid:{
        type :DataTypes.INTEGER ,
        primaryKey:true,
        autoIncrement:true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue:3
    },
    token:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    }
});

const Blog=sequelize.define("blogs",{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    blogs:{
        type:DataTypes.STRING,
        
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: true, 
    },
    blogid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }

});

User.hasMany(Blog,{foreignKey:'userid'});
Blog.belongsTo(User,{foreignKey:'userid'})

module.exports={
    sequelize,
    User,
    Blog,

}