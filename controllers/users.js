const knex = require('../db/knex.js');

module.exports = {
  login: function(req, res){

    res.render('users_login', {message: req.session.message});
  },
  register: function(req, res){
    knex('users')
      .insert(req.body)
      .then(()=>{
        req.session.message = "You have successfully registered! Please log in.";
        res.redirect('/users/login');
      })
      .catch(()=>{
        req.session.message = "You entered invalid data. Please register again."
        res.redirect('/users/login');
      })
  },
  check: function(req, res){
    knex('users')
      .where('username', req.body.username)
      .then((result)=>{
        let user = result[0];
        if(user.password === req.body.password){
          req.session.user = user.id;
          res.redirect('/');
        }
      })
      .catch((err)=>{
        req.session.message = "You entered a invalid username or password."
        res.redirect('/users/login')
      })
  }
}
