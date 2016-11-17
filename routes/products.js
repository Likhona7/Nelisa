/***
 * A very basic CRUD example using MySQL
 */
var userRoles = {
  "likhona": "admin",
  "andile": "viewer"
}

exports.show_products = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('select products.id, products.description as product_name, categories.description from products inner join categories on products.category_id = categories.id', [], function(err, results) {
      if (err) return next(err);
      res.render('products', {
        no_products: results.length === 0,
        products: results

      });
    });
  });
};


exports.searchProducts = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    console.log(req.body);
    var search_val = '%' + req.body.search_val + '%';
    connection.query('select products.id, products.description as product_name, categories.description from products inner join categories on products.category_id = categories.id where products.description like ?', search_val, function(err, results) {
      if (err) return next(err);
      console.log('Record Updated ' + results);
      res.render('productSearch', {
        products: results,
        layout : false
      });
    })
  })
}


exports.showAdd_products = function(req, res) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from categories', [], function(err, categories) {
      if (err) return next(err);
      res.render('add', {
        categories: categories
      });
    });
  });
};

exports.add_products = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      category_id: Number(req.body.category_id),
      description: req.body.description
        //  price: Number(req.body.price)
    };
    //  console.log(data);
    connection.query('insert into products set ?', data, function(err, results) {
      if (err) return next(err);
      res.redirect('/products');
    });
  });
};
////////////////////////////////////////////////////////////////////////////////
exports.get_products = function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM categories', [id], function(err, categories) {
      if (err) return next(err);
      connection.query('SELECT * FROM products WHERE id = ?', [id], function(err, products) {
        if (err) return next(err);
        var product = products[0];
        console.log(products);

        categories = categories.map(function(category) {
          category.selected = category.id === product.category_id ? "selected" : "";
          return category;
        });
        res.render('edit', {
          categories: categories,
          data: product

        });
      });
    });
  });
};
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
exports.update_products = function(req, res, next) {
  var data = {
    category_id: Number(req.body.category_id),
    description: req.body.description
      //price: Number(req.body.price)0
  };
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE products SET ? WHERE id = ?', [data, id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/products');
    });
  });
};

exports.delete_products = function(req, res, next) {
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    connection.query('DELETE FROM products WHERE id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/products');
    });
  });
};
