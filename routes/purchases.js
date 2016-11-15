exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('select purchases.id, purchases.supplier, purchases.purchase_date, purchases.quantity, purchases.cost, products.description from purchases inner join products on purchases.prod_id = products.id', [], function(err, results) {
      if (err) return next(err);
      res.render('purchases', {
        no_purchases: results.length === 0,
        purchases: results
      });
    });
  });
};
////////////////////////////////////////////////////////////////////////////////
exports.searchPurchases = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    console.log(req.body);

    var search_val = '%' + req.body.search_val + '%';


    connection.query('select purchases.id, purchases.supplier, purchases.purchase_date, purchases.quantity, purchases.cost, products.description from purchases inner join products on purchases.prod_id = products.id where products.description like ?', search_val, function(err, results) {
      if (err) return next(err);
      //console.log('Record Updated ' + results +"lllllllllllllllllllllllllllllllllllllllllll");
      console.log(results);
      res.render('purchaseSearch', {
        purchases: results
      });
    })
  })
}
////////////////////////////////////////////////////////////////////////////////
exports.showAdd = function(req, res, next){
req.getConnection(function(err, connection){
if (err) return next(err);
connection.query('select * from products', [], function(err, categories){
if(err) return next(err);
res.render('add_purchases', {
  categories:categories
});
});
});
};
////////////////////////////////////////////////////////////////////////////////
exports.addPurchases = function(req, res, next){
req.getConnection(function(err, connection){
if (err) return next(err);
var input = JSON.parse(JSON.stringify(req.body));
  var data = {
    supplier: input.supplier,
    purchase_date: input.purchase_date,
    quantity: input.quantity,
    cost : input.cost,
    prod_id: input.prod_id
  };
  //console.log(data);
connection.query('insert into purchases set ?', data, function(err, results){
  if(err)
  console.log("Error inserting : %s ",err );
   			res.redirect('/purchases');
})})}
////////////////////////////////////////////////////////////////////////////////
exports.get = function(req, res, next) {
  var id = req.params.id;
  //console.log(id)
  // 	var input = JSON.parse(JSON.stringify(req.body)); var data = {sale_date: input.sale_date,quantity: input.quantity,price : input.price,product_id: input.id};console.log(data);
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM products', [id], function(err, products) { // console.log(categories);
      console.log(products);
      if (err) return next(err);
      req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM purchases WHERE id = ?', [id], function(err, rows) {
          if (err) {
            console.log("Error Selecting : %s ", err);
          }
          var purchase = rows[0];
          products = products.map(function(product) {
            product.selected = product.id === purchase.prod_id ? "selected" : "";
            return product;
          })
          res.render('edit_purchases', {
            products: products,
            data: purchase

          });
            console.log(purchases)
        });
      });
    });
  });
}; ///////////////////////////////////////////////////////////////////////////////
   exports.update = function(req, res, next){
     var data = {
       supplier: req.body.supplier,
       purchase_date: req.body.purchase_date,
       quantity : Number(req.body.quantity),
       cost : req.body.cost,
       prod_id : req.body.prod_id

     };
     console.log(data);
       var id = req.params.id;
      console.log(id);
       //console.log(id);
       req.getConnection(function(err, connection){
       if (err) return next(err);
       connection.query('UPDATE purchases SET ? WHERE id = ?', [data, id], function(err, rows){
         if (err) return next(err);
             res.redirect('/purchases');
       });});};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
exports.delete = function(req, res, next){
  var id = req.params.id;
  req.getConnection(function(err, connection){
    connection.query('DELETE FROM purchases WHERE id = ?', [id], function(err,rows){
      if(err) return next(err);
      res.redirect('/purchases');
    });
  });
};
