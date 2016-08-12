var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coder123',
  port: 3306,
  database: 'nelisa'
});

var sql = "INSERT INTO categories (description) VALUES ?";

var values = [
  ['Bakery'],
  ['Sweets'],
  ['Hygiene'],
  ['Other'],
  ['Canned Food'],
  ['Meat'],
  ['Dairy'],
  ['Soft Drink'],
  ['Fruit']
];


console.log(sql);


conn.query(sql, [values], function(err) {
  if (err) throw err;
  conn.end();
});
