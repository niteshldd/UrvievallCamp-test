var mongoose = require("mongoose");
var Campground = require("./models/campground")
var Comment = require("./models/comment")

var data = [
    {
        name: "Camp ground",
        image: "https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg",
        description: "jungle"
    },
    {
        name: "Night Camo ground",
        image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
        description: "Moon ligh"
    },
    {
        name: "Van Camp ground",
        image: "https://farm4.staticflickr.com/3881/14146164489_0cb49d2904.jpg",
        description: "Jungle Van"
    }
]

function seedDb(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if (err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds");
        //     // Add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         }
        //         else{
        //             console.log("added data")
        //             // Create a comment
        //             Comment.create(
        //                 {text: "This place is great, but not much",
        //                 author : "Homer"
        //             },function(err, comment){
        //                 if(err){
        //                     console.log(err)
        //                 }else{
        //                     campground.comments.push(comment);
        //                     campground.save()
        //                     console.log("created comment")
        //                 }
        //             }

        //         )
        //         }
        //     })
        // })
    })

    
}

module.exports = seedDb

