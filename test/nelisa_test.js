var assert = require("assert");
var nelisa = require("../nelisa");


describe("Spaza Shop Data", function(){

it("Sorting out the data for the week", function(){


  var results = nelisa.getSortedData('./files/week1.csv');

          assert.equal(105, results);


})

it("The most popular product sold each week", function(){
  var results = nelisa.getSortedData('./files/week2.csv');

          assert.equal(117, results);

      });



})
