
var fs = require("fs");

exports.getSortedData = function(path) {
     var spazaString = fs.readFileSync(path, "utf8");
  var spazaString = spazaString.split("\n").splice([1]).filter(Boolean);
//console.log(spazaString)
  return spazaString;
}

exports.getGroupedData = function(spazaString){

var list = [];
spazaString.forEach(function(n){
var x = n.split(",")
list.push(x);
})
var sortedList = list.map(function(product){
  return {
     SoldItem : product[3],
Item : product[2]

  }
})
//console.log(sortedList);
soldProducts  = {};
var arrMap =[];
sortedList.forEach(function(data){
var currentItem = data.Item;
var itemSold = data.SoldItem;

if(soldProducts[currentItem] === undefined){

  soldProducts[currentItem] = 0;
}
soldProducts[currentItem] += Number(itemSold);

 });
 //console.log(soldProducts);

for(var key in soldProducts){
result = {
items : key,
itemSold : soldProducts[key]
}
arrMap.push(result);
}
//  console.log(arrMap)

 return arrMap;


}

exports. = function(){

}
