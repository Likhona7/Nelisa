var fs = require("fs");

var handlebars = require("handlebars");

var nelisa = require("./nelisa");
var Obj = nelisa.readData('./files/week1.csv');
var data = nelisa.mostPopular(Obj);

console.log(data);



var source = fs.readFileSync("./index.handlebars", 'utf8');

var template = handlebars.compile(source);

var results = template(data);

fs.writeFileSync("nelisa.html", results)
