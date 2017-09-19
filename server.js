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
var middleware = require("middleware");
var parseurl = require('parseurl');
var LocalStrategy = require('passport-local');
var flash = require('express-flash');
var app = express();

//..............................................................................

var dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'boot123',
  port: 3306,
  database: 'nelisa'
};

//..............................................................................
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
    maxAge: 90000 * 6,
    resave: true,
    saveUninitialized: false
  }
}));


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

app.all('*', checkUser);

function checkUser(req, res, next) {
  // console.log("your path is: " + req.path + " your session variable " + req.session.user);

  if (req.path == '/signup' || req.path == '/login') return next();

  if (req.session.user) {
    //make user always available in my template
    if (req.session.user) {
      res.locals.user = req.session.user;
      res.locals.is_admin = req.session.user.is_admin;
    }
    return next();
  }
  res.redirect("/login");
};


//..............................................................................

//setup the handlers
app.get('/categories', categories.show_categories);
app.get('/categories/add', mid.requiresLoginAsAdmin, categories.showAdd_categories);
app.get('/categories/edit/:id', mid.requiresLoginAsAdmin, categories.get_categories);
app.post('/categories/update/:id', mid.requiresLoginAsAdmin, categories.update_categories);
app.post('/categories/add', categories.add_categories);
// //this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/categories/delete/:id', categories.delete_categories);
app.post('/categories/search/', categories.searchCategories);

//..............................................................................

app.get("/user", user.show_users);
app.get("/user/add", mid.requiresLoginAsAdmin, user.showAdd_user);
app.get("/user/edit/:id", mid.requiresLoginAsAdmin, user.editUsers);
app.post("/user/update/:id", mid.requiresLoginAsAdmin, user.update);
app.post("/user/add", user.add_users);
app.get("/user/delete/:id", user.delete);

//..............................................................................

app.get('/products', products.show_products);
app.get('/products/add', mid.requiresLoginAsAdmin, products.showAdd_products);
app.get('/products/edit/:id', mid.requiresLoginAsAdmin, products.get_products);
app.post('/products/update/:id', mid.requiresLoginAsAdmin, products.update_products);
app.get('/products/delete/:id', products.delete_products);
app.post('/products/add', products.add_products);
app.post('/products/search/', products.searchProducts);

//..............................................................................

app.get('/sales', mid.requiresLoginAsAdmin, sales.show);
app.get('/sales/add_sales', mid.requiresLoginAsAdmin, sales.showAdd);
app.post('/sales/add_sales', sales.addsale);
app.get('/sales/edit_sales/:id', mid.requiresLoginAsAdmin, sales.get);
app.post('/sales/update/:id', mid.requiresLoginAsAdmin, sales.update);
app.get('/sales/delete/:id', sales.delete);
app.post('/sales/search/', sales.searchSales);

//..............................................................................
app.get('/purchases', mid.requiresLoginAsAdmin, purchases.show);
app.get('/purchases/add_purchases', mid.requiresLoginAsAdmin, purchases.showAdd);
app.post('/purchases/add_purchases', mid.requiresLoginAsAdmin, purchases.addPurchases);
app.get('/purchases/edit_purchases/:id', mid.requiresLoginAsAdmin, purchases.get);
app.post('/purchases/update/:id', mid.requiresLoginAsAdmin, purchases.update);
app.get('/purchases/delete/:id', purchases.delete);
app.post('/purchases/search/', purchases.searchPurchases);
//..............................................................................



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
app.post("/login_users", function(req, res, next) {});

app.get("/signup", function(req, res) {
  res.render("signUp_users");
});

app.post("/signup", signUp.add_users);


//..............................................................................

//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
