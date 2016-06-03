var fs = require("fs");


exports.getSortedData = function(path) {

     var spazaString = fs.readFileSync(path, "utf8");
  var spazaString = spazaString.split("\n").splice([1]).filter(Boolean);

var list = [];

spazaString.forEach(function(n){
var x = n.split(",")
list.push(x);
})

var sortedList = list.map(function(product){

  return {
    Day : product[0],
     Dates : product[1],
     Item : product[2],
     SoldItem : product[3],
     SalePrice : product[4]
  }
})
//console.log(sortedList);
     return spazaString;
 }

exports.getMostPopular = function(path) {


console.log(sortedList)



}
