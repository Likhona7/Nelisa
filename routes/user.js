exports.show_users = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from users', [], function(err, results) {
        if (err) return next(err);
		res.render('user', {
				no_user : results.length === 0,
				users : results,
				user: req.session.user,
				is_admin: req.session.is_admin
		});
      });
	});
};




exports.showAdd_user = function(req, res){
	res.render('add_user');
}

//
// exports.add_users = frunction(req, res){
//
// req.getConnection(function(err, connection){
// if(err) return next(err);
// connection.query('select * from user', [], function(err, results){
//
//
// })
// })
// }
