var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");





router.get('/', function(req, res){
    res.render("landing");
});


// var campgrounds = [
//     {name: "Dog ground", image:"http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg"},
//     {name: "Campu ground ", image:"http://www.cityofwashburn.org/uploads/7/0/4/7/70473445/8666847.jpg?464"},
//     {name: "Water ground ", image:"http://www.suttonfalls.com/communities/4/004/012/498/244//images/4628314067.jpg"}
// ]

router.get("/register",function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register")
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds");
        })
    })
});
//show login form 

router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", 
{
    successRedirect: "/campgrounds",
    failureRedirect: "/login",
}), function(req, res){
    
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;

