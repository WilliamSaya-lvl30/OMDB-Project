// el inicio de la app

const express=require('express')
const volleyball=require('volleyball')
const bodyParser=require('body-parser')
const cors = require("cors");
const rutas=require("./routes")
const logger = volleyball.custom({ debug: true })
const cookieParser=require('cookie-parser')
const session=require('express-session')
const passport=require('passport')
const LocalStrategy = require('passport-local').Strategy
const User=require('./model/user')
const db=require('./db/index')

const app=express()

app.use(cors());

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger)
app.use(volleyball)

app.use(cookieParser())
app.use(session({secret:"omdb", resave:false, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where:{email} })
        .then((user) => {
          if (!user) {
            return done(null, false,{ message: 'Incorrect username.' }); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false,{ message: 'Incorrect password.' }); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});

app.use("/api",rutas)

app.get('/*', function(req, res){
  res.sendFile(__dirname +"/public/index.html");
}); 

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});

db.sync({force:false})
  .then(()=>{
    app.listen(5000, () => console.log(" listenning on port 5000"));
  })


