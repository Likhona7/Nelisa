var assert = require("assert");
var nelisa = require("../nelisa");
var spazaString = nelisa.getSortedData('./files/week1.csv')

describe("Spaza Shop Data", function(){

it("Sorting out the data for the week1", function(){
  var results = nelisa.getSortedData('./files/week1.csv');
          assert.equal(results.length, 105);
})

it("Sorting out the data for the week2", function(){
  var results = nelisa.getSortedData('./files/week2.csv');
          assert.equal(results.length, 117);
})

 it("Should group the data for each week1", function(){

var results = nelisa.getGroupedData(spazaString);
   var week1 = [ { items: 'Milk 1l', itemSold: 39 },
     { items: 'Imasi', itemSold: 30 },
     { items: 'Bread', itemSold: 45 },
     { items: 'Chakalaka Can', itemSold: 23 },
     { items: 'Gold Dish Vegetable Curry Can', itemSold: 17 },
     { items: 'Fanta 500ml', itemSold: 33 },
     { items: 'Coke 500ml', itemSold: 54 },
     { items: 'Cream Soda 500ml', itemSold: 22 },
     { items: 'Iwisa Pap 5kg', itemSold: 17 },
     { items: 'Top Class Soy Mince', itemSold: 22 },
     { items: 'Shampoo 1 litre', itemSold: 3 },
     { items: 'Soap Bar', itemSold: 12 },
     { items: 'Bananas - loose', itemSold: 47 },
     { items: 'Apples - loose', itemSold: 36 },
     { items: 'Mixed Sweets 5s', itemSold: 49 } ];
assert.deepEqual(results, week1);

       });

it("should find the most popular product sold each week", function(){
  var arrMap = nelisa.getGroupedData(spazaString);
  var results = nelisa.getMostPopular(arrMap);

var popular = 'Coke 500ml';
assert.deepEqual(results, popular);

})
it("should find the least popular product sold each week", function(){
  var arrMap = nelisa.getGroupedData(spazaString);
  var results = nelisa.getLeastPopular(arrMap);

var notpopular = 'Shampoo 1 litre';
assert.deepEqual(results, notpopular);

})

})
