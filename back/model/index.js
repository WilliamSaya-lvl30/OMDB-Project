const User=require('./user')
const Favorite=require('./favorite')

User.belongsToMany(Favorite,{through:'userfavorite'})
Favorite.belongsToMany(User,{through:'userfavorite'})

module.exports={
    User:User,
    Favorite:Favorite
}