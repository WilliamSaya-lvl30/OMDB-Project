const S=require('sequelize')
const db=require('../db')
const bcrypt=require('bcrypt')

class User extends S.Model{}

User.init({
    nick:{
        type:S.STRING
    },
    imgProfile:{
        type:S.STRING
    },
    email:{
        type:S.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:S.STRING,
        allowNull:false,
       
    },
    salt:{
        type:S.STRING,
        
    }
},{sequelize:db, modelName:'user'})

User.beforeCreate((user)=>{
    return bcrypt.genSalt(16)
            .then((salt)=>{
                user.salt=salt
                return bcrypt.hash(user.password, user.salt)
            })
            .then((hash)=>{
                user.password=hash
            })
})

User.prototype.hash=(password,salt)=>{
    return bcrypt.hash(password, salt)
}

module.exports=User