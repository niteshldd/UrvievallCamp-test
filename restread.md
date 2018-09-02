# RESTfull Routing

##Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTfull routing practice 

REST - a mapping between HTTP routes and CRUD

BLOG

CREATE 
READ    /allBlog
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id

#////////////////////////////
Restful Routes 

Name        Path      HTTPVerb  Purpose
Index       /dogs     GET       List all dogs
New         /dogs/new GET      Show new dog form 
Create      /dogs     POST      Create a new dog, then redirect somewhere 
Show        /dogs/:id GET        Show infor about on specific dog
Edit        /dogs/:id/edit GET   show edit form for one dog
Update      /dogs/:id   PUT       Update a particular dog, then redirect somewhere 
Destroy     /dogs/:id    DELETE   Delete a particular dog, then redirect somewhere 


#####################################################
# Assocations 

# Intro to Associations
* Define associations 
* Discuss one:one, one:many, and many:many relationships

User 
Post
Photos 
Albums 
Comments 
Tags 
Likes 

## Embedding association 
User 
Post

## Referencing Data 



## Refactor Mongoose Code 

* Create a modeule directory 
* Use module.exporst
* Require everything correctly 

# Add Seeds 

* Add a seed.js file 
* Run the seeds file every time the server starts 

#Add the Comment model
* Make our error go away!
* Display comments on campgrounds show page 

#Comment New/Create 
* Discuss nested routes 
* Add the comment new and create routes 
* Add the new comment form 


Name        Path                        HTTPVerb  Purpose
=======================================================
INDEX      /campgrounds GET 
NEW       /campgrounds/new GET
NEW       campgrounds/:id/comments/new  GET
CREATE    campgrounds/:id/comments      POST 


#=========================================
# Authentication
##Intro to Auth
* What tools are we using ?
* Passport
* Passport Local 
* Passport Local Mongoose

* Walk through auth flow 
* Discuss sessions
  * Express-Session

#Auth Code Along part1
* Setup folder structure 
* Install needed packages
* Add root route and template 
* Add secret royte and template 

#Auth Code Along part2
* Create User model
* Configure passport