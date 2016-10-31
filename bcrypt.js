var bcrypt = require('bcrypt');



var hashFromDB = '$2a$10$foo';
var plainPassFromUser = 'mypassword';

bcrypt.compare(plainPassFromUser, hashFromDB, function(err, matches) {
  if (err)
    console.log('Error while checking password');
  else if (matches)
    console.log('The password matches!');
  else
    console.log('The password does NOT match!');
});
