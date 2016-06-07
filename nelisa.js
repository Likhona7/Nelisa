var fs = require("fs");
exports.getSortedData = function(path) {
    var spazaString = fs.readFileSync(path, "utf8");
    var spazaString = spazaString.split("\n").splice([1]).filter(Boolean);

//    console.log(spazaString)
    return spazaString;
  }
  //////////////////////////////////////////////////////////////////////////////
exports.getGroupedData = function(spazaString) {
    var list = [];
    spazaString.forEach(function(n) {
      var x = n.split(",")
      list.push(x);
    })
    var sortedList = list.map(function(product) {
        return {
          SoldItem: product[3],
          Item: product[2]

        }
      })


      //console.log(sortedList);
    soldProducts = {};
    var arrMap = [];
    sortedList.forEach(function(data) {
      var currentItem = data.Item;
      var itemSold = data.SoldItem;

      if (soldProducts[currentItem] === undefined) {

        soldProducts[currentItem] = 0;
      }
      soldProducts[currentItem] += Number(itemSold);

    });
    //console.log(soldProducts);
    for (var key in soldProducts) {
      result = {
        productName: key,
        itemSold: soldProducts[key]
      }
       //console.log(result);
      arrMap.push(result);
    }
    //  console.log(arrMap)
    console.log(arrMap);

    return arrMap;

  }
  /////////////////////////////////////////////////////////////////////////////
exports.getMostPopular = function(arrMap) {

  var mostPop = "";
  var max = -Infinity;

  arrMap.forEach(function(n) {

    var soldProd = n.itemSold;
    var productName = n.productName;

    if (soldProd > max) {
      max = soldProd;

      productName = n.productName;
      mostPop = productName;
    }

  })
  //console.log(mostPop);
  return mostPop;
}
///////////////////////////////////////////////////////////////////////////////
exports.getLeastPopular = function(arrMap){

var leastPop = "";
var min = Infinity;

arrMap.forEach(function(n){

var productName = n.productName;

if(n.itemSold < min){
min = n.itemSold;

productName = n.productName;
leastPop = productName;


}

})

//console.log(leastPop);
return leastPop;

}
