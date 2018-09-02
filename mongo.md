test            0.000GB
MongoDB Enterprise > use demo
switched to db demo
MongoDB Enterprise > show dbs
admin           0.000GB
config          0.000GB
edx-connect-db  0.000GB
edx-course-db   0.000GB
local           0.000GB
mean            0.000GB
mean-dev        0.000GB
mern-starter    0.000GB
mytestingdb     0.000GB
test            0.000GB
MongoDB Enterprise > show db
2018-05-31T22:44:02.348+0530 E QUERY    [thread1] Error: don't know how to show [db] :
shellHelper.show@src/mongo/shell/utils.js:953:11
shellHelper@src/mongo/shell/utils.js:706:15
@(shellhelp2):1:1
MongoDB Enterprise > use demo
switched to db demo
MongoDB Enterprise > show dbs
admin           0.000GB
config          0.000GB
edx-connect-db  0.000GB
edx-course-db   0.000GB
local           0.000GB
mean            0.000GB
mean-dev        0.000GB
mern-starter    0.000GB
mytestingdb     0.000GB
test            0.000GB
MongoDB Enterprise > db.dogs.insert({name: "rusty", "mutt" })
2018-05-31T22:46:13.977+0530 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):1:38
MongoDB Enterprise > db.dogs.insert({name: "rusty",bread: "mutt" })
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > show collections
dogs
MongoDB Enterprise > db.dogs.find()
{ "_id" : ObjectId("5b102df2b8705e3e495de2c1"), "name" : "rusty", "bread" : "mutt" }
MongoDB Enterprise > db.dogs.insert({name: "mama",bread: "mutt" })
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.dogs.find()
{ "_id" : ObjectId("5b102df2b8705e3e495de2c1"), "name" : "rusty", "bread" : "mutt" }
{ "_id" : ObjectId("5b102e29b8705e3e495de2c2"), "name" : "mama", "bread" : "mutt" }
MongoDB Enterprise > show dbs
admin           0.000GB
config          0.000GB
demo            0.000GB
edx-connect-db  0.000GB
edx-course-db   0.000GB
local           0.000GB
mean            0.000GB
mean-dev        0.000GB
mern-starter    0.000GB
mytestingdb     0.000GB
test            0.000GB
MongoDB Enterprise > db.dogs.find({name: "mama"})
{ "_id" : ObjectId("5b102e29b8705e3e495de2c2"), "name" : "mama", "bread" : "mutt" }
MongoDB Enterprise > db.dogs.insert({name: "sonali",bread: "pooodle"})
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise > db.dogs.find({bread:"mutt"})
{ "_id" : ObjectId("5b102df2b8705e3e495de2c1"), "name" : "rusty", "bread" : "mutt" }
{ "_id" : ObjectId("5b102e29b8705e3e495de2c2"), "name" : "mama", "bread" : "mutt" }
MongoDB Enterprise > db.dogs.update({name:"mama"},{bread: "lab"})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
MongoDB Enterprise > db.dogs.find()
{ "_id" : ObjectId("5b102df2b8705e3e495de2c1"), "name" : "rusty", "bread" : "mutt" }
{ "_id" : ObjectId("5b102e29b8705e3e495de2c2"), "bread" : "lab" }
{ "_id" : ObjectId("5b102e8bb8705e3e495de2c3"), "name" : "sonali", "bread" : "pooodle" }
MongoDB Enterprise > db.dogs.update({name:"sonali"},{$set: {name:"mama", isCute: true}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
MongoDB Enterprise > db.dogs.find()
{ "_id" : ObjectId("5b102df2b8705e3e495de2c1"), "name" : "rusty", "bread" : "mutt" }
{ "_id" : ObjectId("5b102e29b8705e3e495de2c2"), "bread" : "lab" }
{ "_id" : ObjectId("5b102e8bb8705e3e495de2c3"), "name" : "mama", "bread" : "pooodle", "isCute" : true }
MongoDB Enterprise > db.dogs.remove({bread:"poodle"})
WriteResult({ "nRemoved" : 0 })
MongoDB Enterprise > db.dogs.find()
{ "_id" : ObjectId("5b102df2b8705e3e495de2c1"), "name" : "rusty", "bread" : "mutt" }
{ "_id" : ObjectId("5b102e29b8705e3e495de2c2"), "bread" : "lab" }
{ "_id" : ObjectId("5b102e8bb8705e3e495de2c3"), "name" : "mama", "bread" : "pooodle", "isCute" : true }
MongoDB Enterprise > db.dogs.remove({bread:"pooodle"})
WriteResult({ "nRemoved" : 1 })
MongoDB Enterprise > db.dogs.find()
{ "_id" : ObjectId("5b102df2b8705e3e495de2c1"), "name" : "rusty", "bread" : "mutt" }
{ "_id" : ObjectId("5b102e29b8705e3e495de2c2"), "bread" : "lab" }
MongoDB Enterprise >