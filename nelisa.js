var fs = require("fs");
exports.getSortedData = function(path) {
    var spazaString = fs.readFileSync(path, "utf8");
    var spazaString = spazaString.split("\n").splice([1]).filter(Boolean);

    //   console.log(spazaString)
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
          Day: product[0],
          Dates: product[1],
          Item: product[2],
          SoldItem: product[3],

          SalePrice: product[4]

        }
      })
      //  console.log(sortedList);
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
    var sort1 = sortedList.map(function(sort) {



        sort.totalSellingPrice = Number((sort.SoldQuantity * sort.SalePrice.replace(/R/g, "")));

        return sortedList;
      })
      //  console.log(sortedList);
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
    //  console.log(spazaString);
    var list = [];
    spazaString.forEach(function(n) {
      var x = n.split(";")
      list.push(x);
    })

    //console.log(list);

    var purchaseWeek0 = [];
    var purchaseWeek1 = [];
    var purchaseWeek2 = [];
    var purchaseWeek3 = [];
    var purchaseWeek4 = [];

    list.forEach(function(list) {
  var date = new Date(list[1] + "2016");

      var date0 = new Date("01-Feb-2016");
      var date1 = new Date("08-Feb-2016");
      var date2 = new Date("15-Feb-2016");
      var date3 = new Date("22-Feb-2016");
      var date4 = new Date("02-Mar-2016");

      if(date < date0){
      purchaseWeek0.push(list);
    }
    if(date > date0 && date < date1){
      purchaseWeek1.push(list);
    }
    if(date > date1 && date < date2){
      purchaseWeek2.push(list);
    }
    if(date > date2  && date < date3){
      purchaseWeek3.push(list);
    }
    if(date > date3 && date < date4){
      purchaseWeek4.push(list);
    }
  });


  purchases = {
  "week0": purchaseWeek0,
  "week1": purchaseWeek1,
  "week2": purchaseWeek2,
  "week3": purchaseWeek3,
  "week4": purchaseWeek4
};
console.log(purchases);
//return (purchases);
};










  ////////////////////////////////////////////////////////////////////////////////
  // var sortedList = list.map(function(product) {
  //     return {
  //       ShopForStock: product[0],
  //       Dates: product[1],
  //       Product: product[2],
  //       Quantity: product[3],
  //       Cost: product[4].replace(/R/g, "").replace(/,/g, "."),
  //       totalCost: product[5]
  //     }
  //
  //   })
  //   //console.log(sortedList);
  // costOfProduct = {};
  // var arrMap = [];
  // sortedList.forEach(function(data) {
  //   var currentItem = data.Product;
  //   var itemSold = Number(data.Cost);
  //
  //   if (costOfProduct[currentItem] === undefined) {
  //
  //     costOfProduct[currentItem] = 0;
  //   }
  //   costOfProduct[currentItem] += Number(itemSold);
  // });
  // //console.log(costOfProduct);
  //
  // return costOfProduct;
