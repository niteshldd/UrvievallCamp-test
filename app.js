var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var Campground = require("./models/campground")
var seedDb = require("./seeds")
var    Comment = require("./models/comment")
var passport = require("passport"),

 User = require("./models/user"),
    LocalStrategy = require("passport-local");
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

// seedDb()
mongoose.connect("mongodb://localhost/uru_camp")

app.use(bodyParser.urlencoded({extended:true}))




app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: "mamanewmamababumaama",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);






app.listen(console.log('App is running on ', 4000))