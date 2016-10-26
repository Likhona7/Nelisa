var bcrypt = require("bcrypt");


exports.Inloggin = function(req, res, next) {

  req.getConnection(function(err, connection) {
        connection.query("SELECT * FROM users", [], function(err, dbUsers) {
          if (err) return next(err);
          console.log(" Users DaTaBaSe Usernames------------");


});
});
};
