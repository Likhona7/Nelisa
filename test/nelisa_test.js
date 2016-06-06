var assert = require("assert");
var nelisa = require("../nelisa");

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
   var spazaString = nelisa.getSortedData('./files/week1.csv');
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

it("Should group the data for each week2", function(){
 var spazaString = nelisa.getSortedData('./files/week2.csv');
 var results = nelisa.getGroupedData(spazaString);
       var week2 =  [ { items: 'Imasi', itemSold: 36 },
           { items: 'Bread', itemSold: 28 },
           { items: 'Chakalaka Can', itemSold: 21 },
           { items: 'Gold Dish Vegetable Curry Can', itemSold: 27 },
           { items: 'Fanta 500ml', itemSold: 23 },
           { items: 'Coke 500ml', itemSold: 42 },
           { items: 'Cream Soda 500ml', itemSold: 22 },
           { items: 'Iwisa Pap 5kg', itemSold: 10 },
           { items: 'Top Class Soy Mince', itemSold: 21 },
           { items: 'Shampoo 1 litre', itemSold: 6 },
           { items: 'Soap Bar', itemSold: 5 },
           { items: 'Bananas - loose', itemSold: 28 },
           { items: 'Apples - loose', itemSold: 21 },
           { items: 'Mixed Sweets 5s', itemSold: 54 },
           { items: 'Milk 1l', itemSold: 28 },
           { items: 'Heart Chocolates', itemSold: 20 },
           { items: 'Rose (plastic)', itemSold: 14 },
           { items: 'Valentine Cards', itemSold: 14 } ];

assert.deepEqual(results, week2);
})

it("should find the most popular product sold each week", function(){
  var arrMap = nelisa.getSortedData('./files/week1.csv');
  var results = nelisa.getGroupedData(arrMap);

var popular = { items: 'Coke 500ml', itemSold: 54 };

})


})
