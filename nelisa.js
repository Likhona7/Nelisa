var fs = require("fs");
exports.readData = function(path) {
    var spazaString = fs.readFileSync(path, "utf8");
    var spazaString = spazaString.split("\n").splice([1]).filter(Boolean);

    //   console.log(spazaString)
    return spazaString;
  }
  //////////////////////////////////////////////////////////////////////////////
exports.GroupingData = function(spazaString) {
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
exports.totalSellingGroupData = function(spazaString) {
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
        SalePrice: product[4].replace(/R/g, "")
      }

    })

    var soldProducts = {};

    sortedList.forEach(function(data) {

      var currentItem = data.Product;
      var totalSellingPrice = Number(data.SoldQuantity * data.SalePrice);
      if (soldProducts[currentItem] === undefined) {
        soldProducts[currentItem] = 0;
      }
      soldProducts[currentItem] += Number(totalSellingPrice);
    });

    //         console.log("////////soldProducts/////////");
    // console.log(soldProducts);
    //console.log(soldProducts);
    return soldProducts;
  }
  /////////////////////////////////////////////////////////////////////////////
exports.mostPopular = function(soldProducts) {
    //  console.log(soldProducts);
    var mostPopular = {};
    var max = -Infinity;


    for (var key in soldProducts) {
  //  console.log(key);
      if (soldProducts[key] > max) {
        max = soldProducts[key];


        mostPopular = {

                product :  key,
        quantity : max };
      }

    }
//console.log(mostPopular)
    return mostPopular;
  }
  ///////////////////////////////////////////////////////////////////////////////
exports.leastPopular = function(Obj) {
    //console.log(arrMap)
    var leastPopular = {};
    var min = Infinity;
    for (var key in Obj) {
      if (Obj[key] < min) {
        min = Obj[key];
        leastPopular = key;

        leastPopular = {


          quantity : min,
        product :  key };

      }

    }
    //console.log(leastPopular);
    return leastPopular;

  }
  //////////////////////////////////////////////////////////////////////////////////
exports.getMapCategory = function( productcategories, soldProducts) {
//console.log(soldProducts);
    var categoryMap = {};
    for (var key in soldProducts) {
      //  soldProducts[key]
      var category = productcategories[key];
      var quantity = soldProducts[key];
      if (!categoryMap.hasOwnProperty(category)) {
        categoryMap[category] = 0;
      }
      categoryMap[category] = categoryMap[category] + quantity;
    }
      //console.log(categoryMap);

    return categoryMap;

  }
  ////////////////////////////////////////////////////////////////////////////////
exports.GroupPurchaseData = function(spazaStringPurchase) {
// console.log(spazaStringPurchase);
  var list = [];
  spazaStringPurchase.forEach(function(n) {
    var x = n.split(";")
    list.push(x);
  })

  var purchaseWeek0 = [];
  var purchaseWeek1 = [];
  var purchaseWeek2 = [];
  var purchaseWeek3 = [];
  var purchaseWeek4 = [];

  list.forEach(function(list) {
    var date = new Date(list[1] + "2016");

    var endOfdate0 = new Date("01-Feb-2016");
    var endOfdate1 = new Date("08-Feb-2016");
    var endOfdate2 = new Date("15-Feb-2016");
    var endOfdate3 = new Date("22-Feb-2016");
    var endOfdate4 = new Date("02-Mar-2016");

    if (date < endOfdate0) {
      purchaseWeek0.push(list);
    }
    if (date > endOfdate0 && date < endOfdate1) {
      purchaseWeek1.push(list);
    }
    if (date > endOfdate1 && date < endOfdate2) {
      purchaseWeek2.push(list);
    }
    if (date > endOfdate2 && date < endOfdate3) {
      purchaseWeek3.push(list);
    }
    if (date > endOfdate3 && date < endOfdate4) {
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
  //console.log(purchases.week1);

  return purchases.week1;
};
////////////////////////////////////////////////////////////////////////////////
exports.weekPurchases = function(purchases) {

  //  console.log(purchases);
    var purchasesArray = [];
    purchases.forEach(function(array) {

      purchasesArray.push([array[2], array[5].replace(/R/g, "").replace(/,/g, ".")]);

    });
    var weeklyPurchases = {};
    purchasesArray.forEach(function(array) {

      if (!weeklyPurchases.hasOwnProperty(array[0])) {
        weeklyPurchases[array[0]] = 0;
      }
      weeklyPurchases[array[0]] += Number(array[1]);
    });
    //console.log(weeklyPurchases);
    return weeklyPurchases;
  }
  /////////////////////////////////////////////////////////////////////////////////
exports.getProfit = function(purchasesAdded, weeklyPurchases) {



   //console.log(purchasesAdded,"lllllllllllllllllllllllllll");
   console.log(weeklyPurchases);

  var profitMap = {};
  var profit = {};
  for (product in purchasesAdded) {

    for (key in weeklyPurchases) {

      if (product === key) {
        profitMap[key] = purchasesAdded[product] - weeklyPurchases[key];
      }
    }
  }
  //  console.log(profitMap);
  return profitMap;

};

/////////////////////////////////////////////////////////////////////////////////
