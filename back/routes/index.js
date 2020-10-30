const express = require("express");
const router = express.Router();
const {User,Favorite}=require('../model/index')
const passport=require('passport')

router.post("/register",(req,res,next)=>{
  console.log(req.body)
    User.create(req.body)
    .then((user)=>{
       return res.status(201).send(user)
    })
    .catch((e)=>next(e))
})


router.post("/users/:id/movies",(req,res,next)=>{  
  Favorite.create(req.body)
    .then(fav=>{
     return fav.addUser(req.params.id)
    })
    .then((fav)=>{
       return res.status(201).send(req.body)
    })
    .catch((e)=>next(e))
})

router.get("/users/:id/movies",(req,res,next)=>{
  Favorite.findAll({ include:{
    model:User,
    where:{
      id:req.params.id
    }
  } })
    .then((fav)=>{
       return res.send(fav)
    })
    .catch((e)=>next(e))
})


router.delete("/users/:id/movies/:movieId",(req,res,next)=>{
 
  User.findByPk(req.params.id)
    .then((user)=>{
       const userSelect=user
       Favorite.findByPk(req.params.movieId)
       .then((favorite)=>{
         userSelect.removeFavorite(favorite)
       
       })
    })
    .then(e=>res.sendStatus(200))
    .catch((e)=>next(e))
})


router.get("/users",(req,res,next)=>{
  User.findAll({})
    .then((users)=>{
       return res.send(users)
    })
    .catch((e)=>next(e))
})


router.get("/users/:id",(req,res,next)=>{
  User.findOne({where:{id:req.params.id},include:{model:Favorite}})
    .then((users)=>{
       return res.send(users)
    })
    .catch((e)=>next(e))
})


router.post("/login",passport.authenticate('local'),(req,res,next)=>{
    res.send(req.user)
})


router.post("/logaut",(req,res,next)=>{
  req.logout();
  res.sendStatus(200)
})



router.get("/me",(req,res,next)=>{
    if(req.user) return res.send(req.user)
    console.log("no hay usuario")
    res.sendStatus(401)
  })

module.exports=router