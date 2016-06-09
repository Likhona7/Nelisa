var assert = require("assert");
var nelisa = require("../nelisa");
var spazaString = nelisa.getSortedData('./files/week1.csv');
var spazaString2 = nelisa.getSortedData('./files/week2.csv');
var spazaString3 = nelisa.getSortedData('./files/week3.csv');
var spazaString4 = nelisa.getSortedData('./files/week4.csv');
var spazaStringPurchase = nelisa.getSortedData('./files/purchases.csv');

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
var week4 = {
  'Imasi': 34,
  'Bread': 33,
  'Chakalaka Can': 33,
  'Gold Dish Vegetable Curry Can': 34,
  'Fanta 500ml': 24,
  'Coke 500ml': 45,
  'Cream Soda 500ml': 19,
  'Iwisa Pap 5kg': 16,
  'Top Class Soy Mince': 43,
  'Shampoo 1 litre': 13,
  'Soap Bar': 25,
  'Bananas - loose': 22,
  'Apples - loose': 32,
  'Mixed Sweets 5s': 40,
  'Milk 1l': 43 };

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
     "Rose (plastic)": "Other" };

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

var categoryWeek4 = {
"Dairy": 77,
"Baked_Goods": 33,
"Canned_Goods": 67,
"Soft_Drink": 88,
"Starch": 16,
"Meat": 43,
"Hygiene": 38,
"Fruit": 54,
"Sweets": 40 };

var purchasesBulk = { 'Chakalaka Can': 675,
  'Coke 500ml': 598,
  'Cream Soda 500ml': 357,
  'Fanta 500ml': 433,
  'Gold Dish Vegetable Curry Can': 478,
  'Imasi': 2238,
  'Iwisa Pap 5kg': 1020,
  'Milk 1l': 1060,
  'Top Class Soy Mince': 808,
  'Bananas - loose': 72,
  'Apples - loose': 795,
  'Mixed Sweets 5s': 2070,
  'Shampoo 1 litre': 520,
  'Soap Bar': 156,
  'Bread': 1270,
  'Rose (plastic)': 200,
  'Heart Chocolates': 500,
  'Valentine Cards': 40 };
 //
 //  '72': 0,
 // '156': 0,
 // '357': 0,
 // '433': 0,
 // '478': 0,
 // '520': 0,
 // '598': 0,
 // '675': 0,
 // '795': 0,
 // '808': 0,
 // '1020': 0,
 // '1060': 0,
 // '1270': 0,
 // '2070': 0,
 // '2238': 0 }
 //
 //
 //
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
  });

  it("Grouping data for each week3", function(){
var results = nelisa.getGroupedData(spazaString3);
assert.deepEqual(results,week3);
  })

  it("Grouping data for each week4", function(){
var results = nelisa.getGroupedData(spazaString4);
assert.deepEqual(results,week4);
  })



  it("should find the most popular product sold each week1", function() {
    var results = nelisa.getMostPopular(week1);

    var popular = 'Coke 500ml';
    assert.deepEqual(results, popular);

   })

   it("should find the most popular product sold each week2", function() {
     var results = nelisa.getMostPopular(week2);

     var popular = 'Mixed Sweets 5s';
     assert.deepEqual(results, popular);

    })
    it("should find the most popular product sold each week3", function() {
      var results = nelisa.getMostPopular(week3);

      var popular = 'Mixed Sweets 5s';
      assert.deepEqual(results, popular);

     })

     it("should find the most popular product sold each week4", function() {
       var results = nelisa.getMostPopular(week4);

       var popular = 'Coke 500ml';
       assert.deepEqual(results, popular);

      })


  it("should find the least popular product sold each week1", function() {

    var results = nelisa.getLeastPopular(week1);

    var notpopular = 'Shampoo 1 litre';
    assert.deepEqual(results, notpopular);

  })
  it("should find the least popular product sold each week2", function() {

    var results = nelisa.getLeastPopular(week2);

    var notpopular = 'Soap Bar';
    assert.deepEqual(results, notpopular);

  })
  it("should find the least popular product sold each week3", function() {

    var results = nelisa.getLeastPopular(week3);

    var notpopular = 'Iwisa Pap 5kg';
    assert.deepEqual(results, notpopular);

  })
  it("should find the least popular product sold each week4", function() {

    var results = nelisa.getLeastPopular(week4);

    var notpopular = 'Shampoo 1 litre';
    assert.deepEqual(results, notpopular);

  })



it("should grouped category week1", function(){
var result = nelisa.getMapCategory(productCategories,week1);
assert.deepEqual(result, categoryWeek1);

});

it("should grouped category week2", function(){
var result = nelisa.getMapCategory(productCategories,week2);
assert.deepEqual(result, categoryWeek2);

})

it("should grouped category week3", function(){
var result = nelisa.getMapCategory(productCategories,week3);
assert.deepEqual(result, categoryWeek3);

})
it("should grouped category week4", function(){
var result = nelisa.getMapCategory(productCategories,week4);
assert.deepEqual(result, categoryWeek4);

})

it("should find the most popular category week1", function(){
var result = nelisa.getMostPopular(categoryWeek1);
assert.deepEqual(result, "Soft_Drink");
});

it("should find the most popular category week2", function(){
var result = nelisa.getMostPopular(categoryWeek2);
assert.deepEqual(result, "Soft_Drink");
});

it("should find the most popular category week3", function(){
var result = nelisa.getMostPopular(categoryWeek3);
assert.deepEqual(result, "Dairy");
});

it("should find the most popular category week4", function(){
var result = nelisa.getMostPopular(categoryWeek4);
assert.deepEqual(result, "Soft_Drink");
});

it("should find the least popular category week1", function(){
var result = nelisa.getLeastPopular(categoryWeek1);
assert.deepEqual(result, "Hygiene");
});

it("should find the least popular category week2", function(){
var result = nelisa.getLeastPopular(categoryWeek2);
assert.deepEqual(result, "Starch");
});

it("should find the least popular category week3", function(){
var result = nelisa.getLeastPopular(categoryWeek3);
assert.deepEqual(result, "Starch");
});

it("should find the least popular category week4", function(){
var result = nelisa.getLeastPopular(categoryWeek4);
assert.deepEqual(result, "Starch");
});

it("Should group data for purchases",function(){


  var result = nelisa.GroupPurchaseData(spazaStringPurchase);
  assert.deepEqual(result, purchasesBulk);
});

it("should group data for week1",function(){

  var lee = [];
var result = nelisa.getGroupedData2(spazaString);
assert.deepEqual(result, lee);

});

})
