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

    // for (var key in soldProducts) {
    //   result = {
    //       productName: key,
    //       itemSold: soldProducts[key]
    //     }
    //     //console.log(result);
    //   arrMap.push(result);
    // }
    //  console.log(arrMap)
    // console.log(arrMap);
    //console.log(soldProducts);
    return soldProducts;

  }
  /////////////////////////////////////////////////////////////////////////////
exports.getMostPopular = function(Obj) {



    var mostPopular = "";
    var max = -Infinity;

    for (var key in Obj) {

        if (Obj[key] > max) {

          max = Obj[key];

          mostPopular = key;


      }
}
    return mostPopular;
  }
  ///////////////////////////////////////////////////////////////////////////////
exports.getLeastPopular = function(Obj) {

    //console.log(arrMap)
    var leastPopular = "";
    var min = Infinity;
    for (var key in Obj) {

        if (Obj[key] < min) {

          min = Obj[key];

          leastPopular = key;


      }

  }
  //console.log(leastPopular);
 return leastPopular;

}
  /////////////////////////////////////////////////////////////////////////////////

  exports.getMapCategory = function(productcategories, productWeeks) {
var categoryMap = {};

  for(var key in productWeeks){

productWeeks[key]

var category = productcategories[key];
  var quantity = productWeeks[key];


     if(!categoryMap.hasOwnProperty(category)){
       categoryMap[category] = 0;
   }
   categoryMap[category] = categoryMap[category] + quantity;
}
//   console.log(categoryMap);

return categoryMap;

}
