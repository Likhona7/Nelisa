var assert = require("assert");
var nelisa = require("../nelisa");
var spazaString = nelisa.getSortedData('./files/week1.csv')

describe("Spaza Shop Data", function() {

  it("Read out the data for the week1", function() {
    var results = nelisa.getSortedData('./files/week1.csv');
    assert.equal(results.length, 105);
  })
  it("Read out the data for the week2", function() {
    var results = nelisa.getSortedData('./files/week2.csv');
    assert.equal(results.length, 117);
  })
  it("Read out the data for the week3", function() {
    var results = nelisa.getSortedData('./files/week3.csv');
    assert.equal(results.length, 104);
  })
  it("Read out the data for the week4", function() {
    var results = nelisa.getSortedData('./files/week4.csv');
    assert.equal(results.length, 119);
  })

  it("Reading the category data", function() {

    var result = nelisa.getSortedData('./files/category.csv');
    assert.equal(result.length, 20);

  })

  it("Reading the purchases data", function() {

    var result = nelisa.getSortedData('./files/purchases.csv');
    assert.equal(result.length, 153);

  })




  // it("Grouping data for each week1", function() {
  //
  //   var results = nelisa.getGroupedData(spazaString);
  //0
  //   var week1 = [{productName: 'Milk 1l', itemSold: 39},
  //   {productName: 'Imasi', itemSold: 30},
  //   {productName: 'Bread', itemSold: 45},
  //   {productName: 'Chakalaka Can', itemSold: 23},
  //   {productName: 'Gold Dish Vegetable Curry Can', itemSold: 17},
  //   {productName: 'Fanta 500ml', itemSold: 33},
  //   {productName: 'Coke 500ml', itemSold: 54},
  //   {productName: 'Cream Soda 500ml', itemSold: 22},
  //   {productName: 'Iwisa Pap 5kg', itemSold: 17},
  //   {productName: 'Top Class Soy Mince', itemSold: 22},
  //   {productName: 'Shampoo 1 litre', itemSold: 3},
  //   {productName: 'Soap Bar', itemSold: 12},
  //   {productName: 'Bananas - loose', itemSold: 47},
  //   {productName: 'Apples - loose', itemSold: 36},
  //   {productName: 'Mixed Sweets 5s',itemSold: 49
  //   }];
  //
  //   assert.deepEqual(results, week1);
  //
  // });
  it("Grouping data for each week2", function(){
var results = nelisa.getGroupedData(spazaString);

var week2 = [ { productName: 'Milk 1l', itemSold: 39 },
{ productName: 'Imasi', itemSold: 30 },
{ productName: 'Bread', itemSold: 45 },
{ productName: 'Chakalaka Can', itemSold: 23 },
{ productName: 'Gold Dish Vegetable Curry Can', itemSold: 17 },
{ productName: 'Fanta 500ml', itemSold: 33 },
{ productName: 'Coke 500ml', itemSold: 54 },
{ productName: 'Cream Soda 500ml', itemSold: 22 },
{ productName: 'Iwisa Pap 5kg', itemSold: 17 },
{ productName: 'Top Class Soy Mince', itemSold: 22 },
{ productName: 'Shampoo 1 litre', itemSold: 3 },
{ productName: 'Soap Bar', itemSold: 12 },
{ productName: 'Bananas - loose', itemSold: 47 },
{ productName: 'Apples - loose', itemSold: 36 },
{ productName: 'Mixed Sweets 5s', itemSold: 49 }];

assert.deepEqual(result,week2);
  })

  it("should find the most popular product sold each week", function() {
    var arrMap = nelisa.getGroupedData(spazaString);
    var results = nelisa.getMostPopular(arrMap);

    var popular = 'Coke 500ml';
    assert.deepEqual(results, popular);

  })


  it("should find the least popular product sold each week", function() {
    var arrMap = nelisa.getGroupedData(spazaString);
    var results = nelisa.getLeastPopular(arrMap);

    var notpopular = 'Shampoo 1 litre';
    assert.deepEqual(results, notpopular);

  })

})
