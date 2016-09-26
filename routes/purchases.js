exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from purchases', [], function(err, results) {
      if (err) return next(err);
      res.render('purchases', {
        no_purchases: results.length === 0,
        purchases: results,
      });
    });
  });
};

exports.showAdd = function(req, res, next){
req.getConnection(function(err, connection){
if (err) return next(err);
connection.query('select * from purchases', [], function(err, categories){
if(err) return next(err);
res.render('add_purchases', {
  categories:categories,
});
});
});
};

exports.addPurchases = function(req, res, next){
req.getConnection(function(err, connection){
if (err) return next(err);
var input = JSON.parse(JSON.stringify(req.body));
  var data = {
    purchase_date: input.purchase_date,
    quantity: input.quantity,
    cost : input.cost,
    prod_id: input.prod_id
  };
connection.query('insert into purchases set ?', data, function(err, results){
  if(err)
  console.log("Error inserting : %s ",err );
   			res.redirect('/purchases');
})

})
}
