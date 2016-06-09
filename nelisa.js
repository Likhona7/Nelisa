var fs = require("fs");
exports.getSortedData = function(path) {
    var spazaString = fs.readFileSync(path, "utf8");
    var spazaString = spazaString.replace(/;/g, ",").split("\n").splice([1]).filter(Boolean);

//       console.log(spazaString)
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

     //console.log(soldProducts)
    return soldProducts;

  }
  /////////////////////////////////////////////////////////////////////////////
  exports.getGroupedData2 = function(spazaString) {
      var list = [];

      spazaString.forEach(function(n) {
        var x = n.split(",")
        list.push(x);
      })
      var sortedList = list.map(function(product) {
        return {
          Day: product[0],
          Dates: product[1],
          Product: product[2],
          SoldQuantity: product[3],
          SalePrice: product[4]


        }

      })
    //  console.log(sortedList);
//       sort1.push(sortedList);
//
// console.log(sort1);
//console.log(sortedList);
var sort1 = sortedList.map(function(sort){
  sort.totalCost = Number((sort.SoldQuantity*sort.SalePrice.replace(/R/g, "")));
 console.log(sort);
  return sort1;
})






      // soldProducts = {};
      // var arrMap = [];
      // sortedList.forEach(function(data) {
      //   var currentItem = data.Item;
      //   var itemSold = data.SoldItem;
      //
      //   if (soldProducts[currentItem] === undefined) {
      //
      //     soldProducts[currentItem] = 0;
      //   }
      //   soldProducts[currentItem] += Number(itemSold);
      //
      // });
      //
      //  //console.log(spazaString)
      // return soldProducts;

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
  for (var key in productWeeks) {
  //  productWeeks[key]
    var category = productcategories[key];
    var quantity = productWeeks[key];
    if (!categoryMap.hasOwnProperty(category)) {
      categoryMap[category] = 0;
    }
    categoryMap[category] = categoryMap[category] + quantity;
  }
  //console.log(categoryMap);

  return categoryMap;

}

////////////////////////////////////////////////////////////////////////////////
exports.GroupPurchaseData = function(spazaString) {
    var list = [];
    spazaString.forEach(function(n) {
      var x = n.split(",")
      list.push(x);
    })
    var sortedList = list.map(function(product) {
      return {

        Item: product[2],
        SoldItem: product[6].replace(/R/g, "")

      }

    })


    soldProducts2 = {};
    var arrMap = [];
    sortedList.forEach(function(data) {
      var currentItem = data.Item;
      var itemSold = Number(data.SoldItem);

      if (soldProducts2[currentItem] === undefined) {

        soldProducts2[currentItem] = 0;
      }
      soldProducts2[currentItem] += Number(itemSold);
    });
     console.log(sortedList);

    return soldProducts2;

  }
////////////////////////////////////////////////////////////////////////////////

// exports.profitableProduct = function(bulkProd, prodWeeks){
//
// var profitMap = {};
//
// console.log(bulkProd);
//
// for (var key in prodWeeks){
//
// var product = bulkProd[key];
// var  quantity = prodWeeks[key];
//
//
//
// if(!profitMap.hasOwnProperty(product)){
//   profitMap[product] = 0;
// }
// profitMap[product] = profitMap[product] / quantity;
//
//
//
// }
// //console.log(profitMap);
//
//
// }
