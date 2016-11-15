exports.show = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('select sales.id, sales.sale_date, sales.quantity, sales.price, products.description from sales inner join products on sales.product_id = products.id', [], function(err, results) {
      if (err) return next(err);
      res.render('sales', {
        no_sales: results.length === 0,
        sales: results
      });
    });
  });
};

////////////////////////////////////////////////////////////////////////////////

exports.searchSales = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    console.log(req.body);
    var search_val = '%' + req.body.search_val + '%';

    connection.query('select sales.id, sales.sale_date, sales.quantity, sales.price, products.description from sales inner join products on sales.product_id = products.id where products.description like ?', search_val, function(err, results) {
      if (err) return next(err);
      console.log('Record Updated ' + results +"lllllllllllllllllllllllllllllllllllllllllll");
      res.render('saleSearch', {
        sales: results
      });
    })
  })
}

////////////////////////////////////////////////////////////////////////////////
exports.showAdd = function(req, res) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('SELECT * from products', [], function(err, categories) {
      if (err) return next(err);
      res.render('add_sales', {
        categories: categories
      });
    });
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.addsale = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) {
      return next(err);
    }
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
      sale_date: input.sale_date,
      quantity: input.quantity,
      price: input.price,
      product_id: input.product_id
    };
    connection.query('insert into sales set ?', data, function(err, results) {
      if (err)
        console.log("Error inserting : %s ", err);
      res.redirect('/sales');
    });
  });
};


// ////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////
exports.get = function(req, res, next) {
  var id = req.params.id;
  //console.log(id)
  // 	var input = JSON.parse(JSON.stringify(req.body)); var data = {sale_date: input.sale_date,quantity: input.quantity,price : input.price,product_id: input.id};console.log(data);
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM products', [id], function(err, products) { // console.log(categories);
      if (err) return next(err);
      req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err, rows) {
          if (err) {
            console.log("Error Selecting : %s ", err);
          }
          var sale = rows[0];
          products = products.map(function(product) {
            product.selected = product.id === sale.product_id ? "selected" : "";
            return product;
          })
          res.render('edit_sales', {
            products: products,
            data: sale
          });
          //  console.log(sale)
        });
      });
    });
  });
}; ///////////////////////////////////////////////////////////////////////////////

//  ///////////////////////////////////////////////////////////////////////////////
// exports.salesUpdate = function(req, res, next){
//   console.log(req);
// 	var data = JSON.parse(JSON.stringify(req.body));
// 	var id = req.params.id;
// 	var input = JSON.parse(JSON.stringify(req.body));
// 	     var data = {
//  			product_id: Number(input.product_id),
//  			sale_date: Number(input.sale_date),
//  			quantity: Number(input.quantity),
//  			price : Number(input.price),
//  		//	name: input.name
// 		};
//    console.log(data);
// 	req.getConnection(function(err, connection){
// 		connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows){
// 			if (err){
// 		       console.log("Error Updating : %s ",err );
// 			}
// 		    res.redirect('/sales');});});};

exports.update = function(req, res, next) {
  var data = {
    sale_date: req.body.sale_date,
    quantity: Number(req.body.quantity),
    price: req.body.price,
    product_id: req.body.product_id

  };
  console.log(data);
  var id = req.params.id;
  //  console.log(id);
  //console.log(id);
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};




// exports.delete = function(req, res, next){
// 	var id = req.params.id;
// 	req.getConnection(function(err, connection){
// 	    connection.query('DELETE FROM sales WHERE Id = ?', [id], function(err,rows){
//        console.log(rows);
// 	        if(err){
// 	            console.log("Error Selecting : %s ",err );
// 	            return res.redirect('/categories?error=true&msg=category_linked');
// 		    }else{
// 	        	res.redirect('/sales');
// 	        }
// 		});});};

exports.delete = function(req, res, next) {
  var id = req.params.id;
  req.getConnection(function(err, connection) {
    connection.query('DELETE FROM sales WHERE id = ?', [id], function(err, rows) {
      if (err) return next(err);
      res.redirect('/sales');
    });
  });
};


//  ///////////////////////////////////////////////////////////////////////////////
//
// exports.show = function (req, res, next) {
//  	req.getConnection(function(err, connection){
//  		if (err)
//  			return next(err);
// 			connection.query("SELECT DATE_FORMAT(sales.sales_date,'%d %b %y') as niceDate, sales.id as id,no_sold as Quantity, sales.prod_id as id,products.name as name,sum(no_sold * sales_price) as sales from sales, products WHERE products.id = sales.prod_id group by name order by sum(no_sold*sales_price) DESC", [], function(err, results) {
// 			connection.query("SELECT sales.id as id, DATE_FORMAT(sales.sales_date,'%d %b %y') as date, sales.id as id,no_sold as Quantity, sales.prod_id as prod_id,products.name as name,sum(no_sold * sales_price) as sales from sales, products WHERE products.id = sales.prod_id group by name order by sum(no_sold*sales_price) DESC", [], function(err, results) {
//  	        	if (err)
//  	        		return next(err);
//            		var query = 'SELECT name,id from products';
//            		connection.query(query, [], function(err, results1){
// 	             res.render( 'sales', {
//    					sales : results,
//    					products : results1
//  				});
//  			});
//  		});
//  	});
// 	});
// };
// ////////////////////////////////////////////////////////////////////////////////
//
// // exports.showAdd = function (req, res, next) {
// //  		req.getConnection(function(err, connection){
// //  		if (err)
// //  			return next(err);
// // 			connection.query("SELECT DATE_FORMAT(sales.sales_date,'%d %b %y') as date, no_sold as Quantity, sales.prod_id as id,products.name as name,sum(no_sold * sales_price) as sales from sales, products WHERE products.id = sales.prod_id group by name order by sum(no_sold*sales_price) DESC", [], function(err, results) {
// // 			connection.query("SELECT sales.id as id, DATE_FORMAT(sales.sales_date,'%d %b %y') as niceDate, no_sold as Quantity, sales.prod_id as prod_id,products.name as name,sum(no_sold * sales_price) as sales from sales, products WHERE products.id = sales.prod_id group by name order by sum(no_sold*sales_price) DESC", [], function(err, results) {
// //  	        	if (err)
// //  	        		return next(err);
// //  		var query = 'SELECT name,id from products';
// //  		connection.query(query, [], function(err, results1){
// //  				res.render( 'addSaleScreen', {
// //  					sales : results,
// //  					products : results1
// //  				});
// //  			});
// //  		});
// //  	});
// // });
// // };
// ////////////////////////////////////////////////////////////////////////////////
// // exports.showEdit = function (req, res, next) {
// //  		req.getConnection(function(err, connection){
// //  		if (err)
// //  			return next(err);
// // 			connection.query("SELECT DATE_FORMAT(sales.sales_date,'%d %b %y') as date, no_sold as Quantity, sales.prod_id as id,products.name as name,sum(no_sold * sales_price) as sales from sales, products WHERE products.id = sales.prod_id group by name order by sum(no_sold*sales_price) DESC", [], function(err, results) {
// // 			connection.query("SELECT sales.id, DATE_FORMAT(sales.sales_date,'%d %b %y') as date, no_sold as Quantity, sales.prod_id as prod_id ,products.name as name,sum(no_sold * sales_price) as sales from sales, products WHERE products.id = sales.prod_id group by name order by sum(no_sold*sales_price) DESC", [], function(err, results) {
// //  	        	if (err)
// //  	        		return next(err);
// //  		var query = 'SELECT name,id from products';
// //  		//var query = 'SELECT sales.prod_id as id,products.name as name from sales,products WHERE products.id = sales.prod_id group by name';
// //  		connection.query(query, [], function(err, results1){
// //  				res.render( 'editSales', {
// //  					sales : results,
// //  					products : results1
// //  				});
// //  			});
// //  		});
// //  	});
// //     });
// // };
// ////////////////////////////////////////////////////////////////////////////////
//
// // exports.addsale = function (req, res, next) {
// //  	req.getConnection(function(err, connection){
// //  		if (err){
// //  			return next(err);
// //  		}
// //  		var input = JSON.parse(JSON.stringify(req.body));
// //  		var data = {
// //  			prod_id: input.prod_id,
// //  			date: input.sales_date,
// //  			quantity: input.quantity,
// //  			price : input.price
// //  		};
// //  		connection.query('insert into sales set ?', data, function(err, results) {
// //  			if (err)
// //  			    console.log("Error inserting : %s ",err );
// //  			res.redirect('/sales');
// //  		});
// //  	});
// // };
// //
// // exports.get = function(req, res, next){
// //  	var id = req.params.id;
// //  	var input = JSON.parse(JSON.stringify(req.body));
// //  	    var data = {
// //  			prod_id: input.id,
// //  			date: input.date,
// //  			quantity: input.quantity,
// //  			price : input.price
// //  		};
// //  	req.getConnection(function(err, connection){
// //  		connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err,rows){
// //  			if(err){
// //  		        console.log("Error Selecting : %s ",err );
// //  			}
// //  		    res.render('editSales',{page_title:"Edit Customers - Node.js", data : rows[0]});
// //  		});
// //  	});
// // };
// exports.salesUpdate = function(req, res, next){
//  	var data = JSON.parse(JSON.stringify(req.body));
//  	var id = req.params.id;
//  	var input = JSON.parse(JSON.stringify(req.body));
//  	     var data = {
// 			product_id: input.id,
// 			date: input.date,
// 			quantity: input.quantity,
// 			price : input.price,
// 			name: input.name
//  		};
//  	req.getConnection(function(err, connection){
//  		connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows){
//       console.log(sales);
//  			if (err){
//  		       console.log("Error Updating : %s ",err );
//  			}
//  		    res.redirect('/sales');
//  		});
//  	});
// };
