var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");


//INDEX - Show all campgrounds

router.get("/campgrounds", function(req, res){
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log(err)
        }else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds})
        }
    })
    // res.render("campgrounds",{campgrounds: campgrounds});
} )


//CREARE - add new campground
router.post("/campgrounds", function(req,res){
    
    //get data from form and add to  array
    var name = req.body.name;
    var image= req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
     
    //Create a new campgrounds and save to data base (DB)
    Campground.create(newCampground,function(err, newlyCreated){
        if(err){
            console.log(err)
        }else{
            res.redirect("/campgrounds")
        }
    })

    //redirect back to camp ground page
    // res.redirect("/campgrounds")
})

//NEW - show form to create new campgrounds

router.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new.ejs");
})

//SHOW - show details about one campground

router.get("/campgrounds/:id", function(req, res){
    //find the camp
    Campground.findById(req.params.id).populate("comments").exec( function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground)
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    })
    // res.render("show")
});
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;
