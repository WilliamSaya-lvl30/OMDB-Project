const S=require('sequelize')
const db=require('../db')

class Favorite extends S.Model{}

Favorite.init({
 Title:{
     type:S.STRING,
     allowNull:false
 },
 imdbID:{
     type:S.STRING,
     allowNull:false
 },
 Poster:{
     type:S.STRING,
     allowNull:false
 }

},{sequelize:db, modelName:'favorite'})

module.exports=Favorite