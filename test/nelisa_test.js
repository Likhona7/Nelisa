var assert = require("assert");

describe("Spaza Shop Data", function(){

it("The most popular product sold each week", function(done){

var nelisa = require("../nelisa");
  var week1 = new nelisa('./files/week1.csv');


      nelisa.getProductNames(function(err, nelisa){
          assert.deepEqual(0, nelisa);
          done();

      });

})

})
