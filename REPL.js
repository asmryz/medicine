const db = require("./models");

//db.Medicine.distinct('Category')
db.Medicine.find({SKUName: {'$regex' : 'liver', '$options' : 'i'}}, '-_id SKUName' )
// db.Medicine.aggregate( [
//     { $group: { _id: { SKUDeptName:"$SKUDeptName" }, total: { $sum: 1 } } },
//     // { $project: { _id: 0, Category: 1 } }
//  ] )

  .then((res) => console.log(JSON.stringify(res, null, 4)))
  .then(() => process.exit());




/*
Contains string
db.collection.find({name:{'$regex' : 'string', '$options' : 'i'}})
Doesn't contain string, only with a regular expression
db.collection.find({name:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})
Exact case insensitive string
db.collection.find({name:{'$regex' : '^string$', '$options' : 'i'}})
Start with string
db.collection.find({name:{'$regex' : '^string', '$options' : 'i'}})
End with string
db.collection.find({name:{'$regex' : 'string$', '$options' : 'i'}})
*/