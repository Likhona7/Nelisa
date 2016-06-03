var fs = require("fs");


exports.getSortedData = function(path) {

     var spazaString = fs.readFileSync(path, "utf8");
  var spazaString = spazaString.split("\n").splice([1]).filter(Boolean);


     console.log(spazaString)

     return spazaString.length;

 }
