var fs = require("fs");


// module.exports = function(path) {
//   this.getProductNames = function(callback) {
     var spazaString = fs.readFileSync("./files/week1.csv", "utf8");
  var spazaString = spazaString.replce(/ "Day,Date,stock item,No sold,Sales Price"/g,"").split("\n");

replace(/ sets of/g, " ")

     console.log(spazaString);
// }
//
// }
