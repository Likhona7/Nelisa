'use strict';
var fs = require("fs");
var handlebars = require("handlebars");
var exphbs = require('express-handlebars');
var express = require('express');
var mysql = require('mysql');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var categories = require('./routes/categories');
var products = require('./routes/products');
var sales = require('./routes/sales');
var purchases = require('./routes/purchases');
var signUp = require("./routes/signUp");
var login = require("./routes/login")
var user = require("./routes/user");
var nelisa = require("./nelisa");
var productCategories = require("./files/category.json");
var spazaStringPurchase = nelisa.readData('./files/purchases.csv');
var session = require('express-session');
var bcrypt = require("bcrypt");
var mid = require("./middleware")
// var middleware = require("middleware");
var parseurl = require('parseurl');
var LocalStrategy = require('passport-local');
var flash = require('express-flash');
var app = express();

var dbOptions = {
  host: 'localhost',
  user: 'root',
  password: '0839535220',
  port: 3306,
  database: 'nelisa'
};





var weeklyStats = function(path) {

  var spazaString = nelisa.readData(path);
  var soldProducts = nelisa.GroupingData(spazaString);
  var categoryWeek = nelisa.getMapCategory(productCategories, soldProducts);
  var PurchasedForWeek = nelisa.GroupPurchaseData(spazaStringPurchase);
  var totalSellingWeek = nelisa.totalSellingGroupData(spazaString);
  var purchasedAdded = nelisa.weekPurchases(PurchasedForWeek);
  var Profit = nelisa.getProfit(purchasedAdded, totalSellingWeek);
  var categoryProfit = nelisa.getMapCategory(productCategories, Profit);

  var mostPopular = nelisa.mostPopular(soldProducts),
    leastPopular = nelisa.leastPopular(soldProducts),
    notPopularCategory = nelisa.leastPopular(categoryWeek),
    popularCategory = nelisa.mostPopular(categoryWeek),
    mostProfitableProduct = nelisa.mostPopular(Profit),
    profitCategory = nelisa.mostPopular(categoryProfit);

  var stats = [mostPopular, leastPopular, popularCategory, notPopularCategory, mostProfitableProduct, profitCategory];
  var statsDescription = ["Most popular product", "Least popular product", "Popular category",
    "Least popular category", "Most profitable product", "Profit category"
  ];

  stats.forEach(function(stat, index) {
    stat.description = statsDescription[index];
  });


  return {
    mostPopular: stats[0],
    leastPopular: stats[1],
    popularCategory: stats[2],
    notPopularCategory: stats[3],
    mostProfitableProduct: stats[4],
    profitCategory: stats[5]
  }
}

var weeklyStatsWeekFor1 = weeklyStats("./files/week1.csv")
var weeklyStatsWeekFor2 = weeklyStats("./files/week2.csv")
var weeklyStatsWeekFor3 = weeklyStats("./files/week3.csv")
var weeklyStatsWeekFor4 = weeklyStats("./files/week4.csv")

var weekStat = {
  week1: weeklyStatsWeekFor1,
  week2: weeklyStatsWeekFor2,
  week3: weeklyStatsWeekFor3,
  week4: weeklyStatsWeekFor4
}



//..............................................................................

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));


var userRoles = {
  "likhona": "admin",
  "andile": "viewer"
}



app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000,
    resave: true,
    saveUninitialized: false
  }
}));

app.use(function(req, res, next) {
  console.log("the middleware :" + req.path);
  next();
})


// app.use(function(req, res, next){
//   console.log('in my middleware!');
//
//   // the user is not going to the login screen
//   if (req.path != "/login_users"){
//       //is the user not logged in?
//       if (!req.session.username ){
//           // redirects to the login screen
//           return res.redirect("/login_users");
//       }
//   }
//
//   //proceed to the next middleware component
//   next();
// });


app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(flash());
//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', {
    error: err
  });
}
////////////////////////////////////////////////////////////////////////////////
// var checkUser = function(req, res, next){
// console.log("checking.user................");
// if(req.session.user || req.path == "/login_users"){
//   return next();
// }
//     res.redirect("/login");
//
// };

app.all('*', checkUser);
function checkUser(req, res, next) {
  console.log("your path is: " + req.path + " your session variable " + req.session.user);
  if (req.session.user || req.path == '/login') {
    //make user always available in my template

    if (req.session.user){
      res.locals.user = req.session.user;
      res.locals.is_admin = req.session.user.is_admin;
    }

    return next();
  }
  res.redirect("/login");
};

// function checkUser(req, res, next) {
//
//   var _ = require('underscore'),
//     nonSecurePaths = ['/contact', '/signUp_users'];
//   if (_.contains(nonSecurePaths, req.path)) return next();
//
//   //authenticate user
//   next();
// }

// app.post("/login", function(req, res){
//   req.session.user = {
//     name: req.body.username,
//     is_admin :userRoles[req.body.username] === "likhona"
//   };
//   res.redirect("/home")
// })
// app.post("/login", function(req, res, next){
//
//       var inputUser = {
//         name : req.body.username,
//         password : req.body.password,
//         is_admin : rolesMap[req.body.username] === "admin"
//       };

//setup the handlers
app.get('/categories', categories.show_categories);
app.get('/categories/add', mid.requiresLoginAsAdmin, categories.showAdd_categories);
app.get('/categories/edit/:id', mid.requiresLoginAsAdmin,categories.get_categories);
app.post('/categories/update/:id', mid.requiresLoginAsAdmin, categories.update_categories);
app.post('/categories/add', categories.add_categories);
// //this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/categories/delete/:id', categories.delete_categories);
////////////////////////////////////////////////////////////////////////////////

app.get("/user", user.show_users);
app.get("/user/add", mid.requiresLoginAsAdmin, user.showAdd_user);
app.get("/user/edit/:id", mid.requiresLoginAsAdmin, user.editUsers);
app.post("/user/update/:id", mid.requiresLoginAsAdmin, user.update);

app.post("/user/add", user.add_users);
app.get("/user/delete/:id", user.delete);




app.get('/products',  products.show_products);
app.get('/products/add', mid.requiresLoginAsAdmin, products.showAdd_products);
app.get('/products/edit/:id', mid.requiresLoginAsAdmin, products.get_products);
app.post('/products/update/:id', mid.requiresLoginAsAdmin, products.update_products);
app.get('/products/delete/:id', products.delete_products);
app.post('/products/add', products.add_products);

////////////////////////////////////////////////////////////////////////

app.get('/sales', sales.show);
app.get('/sales/add_sales', mid.requiresLoginAsAdmin, sales.showAdd);
app.post('/sales/add_sales', sales.addsale);
app.get('/sales/edit_sales/:id', mid.requiresLoginAsAdmin, sales.get);
app.post('/sales/update/:id', mid.requiresLoginAsAdmin, sales.update);
app.get('/sales/delete/:id', sales.delete);
///////////////////////////////////////////////////////////////////
app.get('/purchases', purchases.show);
app.get('/purchases/add_purchases', mid.requiresLoginAsAdmin, purchases.showAdd);
app.post('/purchases/add_purchases', mid.requiresLoginAsAdmin, purchases.addPurchases);
app.get('/purchases/edit_purchases/:id', mid.requiresLoginAsAdmin, purchases.get);
app.post('/purchases/update/:id', mid.requiresLoginAsAdmin, purchases.update);
app.get('/purchases/delete/:id', purchases.delete);
///////////////////////////////////////////////////////////////////////////////



app.use(errorHandler);

//..............................................................................
app.get('/sales/:week', function(req, res) {
  var week = req.params.weekStat;
  // console.log(week);
  res.render("index", weekStat[req.params.week]);
});


app.get("/login", function(req, res) {
  res.render("login_users");
})
app.post("/login", login.Inloggin);



app.get("/home", function(req, res) {
  res.render("home");
});




app.get("/logout", function(req, res) {
  delete req.session.user;
  res.redirect("/login");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

// app.get("/login_users", function(req, res) {
// res.render("login_users", {Title: "logged in"});
// });

app.post("/login_users", function(req, res, next) {});

app.get("/signUp_users", function(req, res) {
  res.render("signUp_users");
})
app.post("/signUp", signUp.add_users);



// router.post("/signUp_users", function(req, res, next){
//   if(req.body.email &&
//   req.body.username &&
// req.body.password &&){
//
//   }
//
// })



// if(req.body.password !== req.body.confirmPassword){
// var err = new Error("password do not match.");
// err.status = 400;
// return next(err);
// }


// else {
//   var err = new Error("All fields required..");
//   err.status = 400;
//   return next(err);
// }

// })

// app.get('/foo', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
// })
// app.get('/bar', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
// })
//



//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});









// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// // create a route
// app.get('/', function(req, res){
//   res.render( "home")
// });
// app.get('/sales/:week_name', function(req, res) {
//   var weekname = req.params.week_name;
//   var weeklyFile = "../files/" + weekname + ".csv";
//   var data = weeklyStats(weeklyFile, "../files/purchases.csv");
//   res.render("weeklyStats", {
//     key: data,
//     week: weekname
//   });
// });
// start the server
// var server = app.listen(3000, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('App listening at http://%s:%s', host, port);
// });

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// var express = require('express'),
//     exphbs  = require('express-handlebars'),
//     mysql = require('mysql'),
//     myConnection = require('express-myconnection'),
//     bodyParser = require('body-parser'),
//     session = require('express-session');
//     categories = require('./routes/categories');
//     products = require('./routes/products');
//     purchases = require('./routes/purchases');
//     sales = require('./routes/sales');
//     users = require('./routes/users');
//     //application = require('./app');
//
// var app = express();
//
// var dbOptions = {
//       host: 'localhost',
//       user: 'root',
//       password: 'lusindisomkiva',
//       port: 3306,
//       database: 'nelisa'
// };
//
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
//
// var rolesMap = {
//   "nelisa":"admin",
//   "aluta" :"viewer"
// };
//
// app.use(session({
// secret: 'keyboard cat',
// resave: false,
// saveUninitialized: true
// }))
//
//
// app.use(express.static(__dirname + '/public'));
//
// //setup middleware
// app.use(myConnection(mysql, dbOptions, 'single'));
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())
//
// function errorHandler(err, req, res, next) {
//   res.status(500);
//   res.render('error', { error: err });
// }
//
// app.get("/", function(req, res){
//     res.redirect("/home");
// });
//
// var checkUser = function(req, res, next){
//     console.log("checkUser...");
//   if(req.session.user || req.path === '/login'){
//         return next();
//   }
//    res.redirect("/login");
//     // next();
// };
//
// app.post("/login", function(req, res, next){
//
//       var inputUser = {
//         name : req.body.username,
//         password : req.body.password,
//         is_admin : rolesMap[req.body.username] === "admin"
//       };
//         //getting my users from the database
//       req.getConnection(function(err, connection){
//         if (err) return next(err);
//
//         connection.query('SELECT * from users where username = ?', [inputUser.name], function(err, results) {
//             if (err) return next(err);
//
//               // console.log(user);
//               // console.log(results);
//
//               if (results.length === 0){
//                 console.log("Access denied....");
//                 return res.redirect("/login");
//               }
//               else{
//                 var dbUser = results[0];
//                 if(inputUser.password === dbUser.password){
//                       //console.log("Wrong Password.....");
//                       //return next();
//                       req.session.user = inputUser;
//                       res.redirect('/home');
//                 }
//                 else{
//                       return res.redirect("/login");
//                 }
//               }
//
//           });
//       });
// })
//
// app.get("/home",function(req, res){
//     res.render("home", {user : req.session.user});
// });
//
// app.get("/logout", function(req, res){
//     delete req.session.user;
//     res.redirect("/login")
// })
//
// app.get("/login", function(req, res){
//     res.render("login", {});
// });
//
// app.get('/categories', checkUser, categories.show);
// app.get('/categories/add', categories.showAdd);
// app.get('/categories/edit/:id', categories.get);
// app.post('/categories/update/:id', categories.update);
// app.post('/categories/add', categories.add);
// app.get('/categories/delete/:id', categories.delete);
//
// app.get('/products', products.show);
// app.get('/products/add', products.showAdd);
// app.get('/products/edit/:id', products.get);
// app.post('/products/update/:id', products.update);
// app.post('/products/add', products.add);
// app.get('/products/delete/:id', products.delete);
//
// app.get('/sales', sales.show);
// app.get('/sales/add', sales.showAdd);
// app.get('/sales/edit/:id', sales.get);
// app.post('/sales/update/:id', sales.update);
// app.post('/sales/add/', sales.add);
// app.get('/sales/delete/:id', sales.delete);
//
// app.get('/purchases', purchases.show);
// app.get('/purchases/add', purchases.showAdd);
// app.get('/purchases/edit/:id', purchases.get);
// app.post('/purchases/update/:id', purchases.update);
// app.post('/purchases/add/', purchases.add);
// app.get('/purchases/delete/:id', purchases.delete);
//
// app.get('/users', users.show);
// app.get('/users/add', users.showAdd);
// app.post('/users/add/', users.add);
// app.post('/users/update/:id', users.update);
//
// app.use(errorHandler);
//
//
// // var portNumber = process.env.CRUD_PORT_NR || 3000;
// //
// // //start everything up
// // app.listen(portNumber, function () {
// //   //  console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
// // });
//
//
//
//
// // app.get('/sales/:week_name', function(req, res){
// //   var week_name = req.params.week_name
// //    //console.log(week_name)
// //   res.send(application.weeklyStats(week_name));
// // });
// //
// //set the port number to an existing environment variable PORT or default to 5000
// app.set('port', (process.env.PORT || 3000));
// //start the app like this:
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
