const knex = require('../db/knex.js');
const encryption = require('../config/encryption.js')
module.exports = {
  login: function(req, res){

    res.render('users_login', {message: req.session.message});
  },
  register: function(req, res){
    // send req.body to be encrypted
    encryption.hash(req.body).then((encryptedUser)=>{
      // take the encrypted user and insert them into the db.
      knex('users')
        .insert(encryptedUser)
        .then(()=>{
          req.session.message = "You have successfully registered! Please log in.";
          res.redirect('/users/login');
        })
        .catch(()=>{
          req.session.message = "You entered invalid data. Please register again."
          res.redirect('/users/login');
        })


    })

  },
  check: function(req, res){
    knex('users')
      .where('username', req.body.username)
      .then((result)=>{

        let user = result[0];

        encryption.check(user, req.body).then((isValid)=>{
          console.log(isValid);
          console.log(user.username);
          if(isValid){
            req.session.user = user.id;
            res.redirect('/');
          }else{
            req.session.message = "You entered a invalid username or password.";
            res.redirect('/users/login');
          }
        })
      })
      .catch((err)=>{
        req.session.message = "You entered a invalid username or password."
        res.redirect('/users/login')
      })
  }
}
