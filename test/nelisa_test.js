var assert = require("assert");
var nelisa = require("../nelisa");
var spazaString = nelisa.getSortedData('./files/week1.csv');
var spazaString2 = nelisa.getSortedData('./files/week2.csv');
var spazaString3 = nelisa.getSortedData('./files/week3.csv');
var spazaString4 = nelisa.getSortedData('./files/week4.csv');

var week1 = {
  'Milk 1l': 39,
 'Imasi': 30,
 'Bread': 45,
 'Chakalaka Can': 23,
 'Gold Dish Vegetable Curry Can': 17,
 'Fanta 500ml': 33,
 'Coke 500ml': 54,
 'Cream Soda 500ml': 22,
 'Iwisa Pap 5kg': 17,
 'Top Class Soy Mince': 22,
 'Shampoo 1 litre': 3,
 'Soap Bar': 12,
 'Bananas - loose': 47,
 'Apples - loose': 36,
 'Mixed Sweets 5s': 49};

var week2 = { 'Imasi': 36 ,
   'Bread': 28 ,
   'Chakalaka Can': 21 ,
   'Gold Dish Vegetable Curry Can': 27 ,
   'Fanta 500ml': 23 ,
   'Coke 500ml': 42 ,
   'Cream Soda 500ml': 22 ,
   'Iwisa Pap 5kg': 10 ,
   'Top Class Soy Mince': 21 ,
   'Shampoo 1 litre': 6 ,
   'Soap Bar': 5 ,
   'Bananas - loose': 28 ,
   'Apples - loose': 21 ,
   'Mixed Sweets 5s': 54 ,
   'Milk 1l': 28 ,
   'Heart Chocolates': 20 ,
   'Rose (plastic)': 14 ,
   'Valentine Cards': 14 };

  var week3 ={ 'Imasi': 25 ,
     'Bread': 24 ,
     'Chakalaka Can': 17 ,
     'Gold Dish Vegetable Curry Can': 8 ,
     'Fanta 500ml': 14 ,
     'Coke 500ml': 18 ,
     'Cream Soda 500ml': 12 ,
     'Iwisa Pap 5kg': 4 ,
     'Top Class Soy Mince': 12 ,
     'Shampoo 1 litre': 4 ,
     'Soap Bar': 8 ,
     'Bananas - loose': 17 ,
     'Apples - loose': 25 ,
     'Mixed Sweets 5s': 29 ,
     'Milk 1l': 28 };

var productCategories = {
    "Bananas - loose" : "Fruit",
    "Apples - loose": "Fruit",
    "Heart Chocolates ": "Sweets",
    "Imasi" : "Dairy",
    "Bread" : "Baked_Goods",
    "Chakalaka Can": "Canned_Goods",
    "Coke 500ml" : "Soft_Drink",
    "Cream Soda 500ml" : "Soft_Drink",
    "Fanta 500ml" : "Soft_Drink",
    "Gold Dish Vegetable Curry Can" : "Canned_Goods",
    "Iwisa Pap 5kg" : "Starch",
    "Milk 1l" : "Dairy",
    "Mixed Sweets 5s" : "Sweets",
    "Shampoo 1 litre" : "Hygiene",
    "Soap Bar" : "Hygiene",
    "Top Class Soy Mince" : "Meat",
    "Heart Chocolates": "Sweets",
     "Valentine Cards": "Other",
     "Rose (plastic)": "Other"
};

  var categoryWeek1 = {
  "Baked_Goods": 45,
  "Canned_Goods": 40,
  "Dairy": 69,
 "Fruit": 83,
 "Hygiene": 15,
 "Starch": 17,
 "Meat": 22,
 "Soft_Drink": 109,
 "Sweets": 49 };

var categoryWeek2 = {
"Baked_Goods": 28,
"Canned_Goods": 48,
"Dairy": 64,
"Fruit": 49,
"Hygiene": 11,
"Starch": 10,
"Meat": 21,
"Other": 28,
"Soft_Drink": 87,
"Sweets": 74
}

var categoryWeek3 = {
"Baked_Goods": 24,
"Canned_Goods": 25,
"Dairy": 53,
"Fruit": 42,
"Hygiene": 12,
"Starch": 4,
"Meat": 12,
"Soft_Drink": 44,
"Sweets": 29
}

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




  it("Grouping data for each week1", function() {
    var results = nelisa.getGroupedData(spazaString);
    assert.deepEqual(results, week1);
  });

it("Grouping data for each week2", function(){
var results = nelisa.getGroupedData(spazaString2);
assert.deepEqual(results,week2);
  })

  it("Grouping data for each week3", function(){
var results = nelisa.getGroupedData(spazaString3);
assert.deepEqual(results,week3);
  })

  it("should find the most popular product sold each week1", function() {
    var results = nelisa.getMostPopular(week1);

    var popular = 'Coke 500ml';
    assert.deepEqual(results, popular);

   })


  it("should find the least popular product sold each week1", function() {

    var results = nelisa.getLeastPopular(week1);

    var notpopular = 'Shampoo 1 litre';
    assert.deepEqual(results, notpopular);

  })



it("the grouped category week1", function(){
var result = nelisa.getMapCategory(productCategories,week1);
assert.deepEqual(result, categoryWeek1);

})
it("the most popular category sold each week2", function(){
var result = nelisa.getMapCategory(productCategories,week2);
assert.deepEqual(result, categoryWeek2);

})

it("the most popular category sold each week3", function(){
var result = nelisa.getMapCategory(productCategories,week3);
assert.deepEqual(result, categoryWeek3);

})

})
