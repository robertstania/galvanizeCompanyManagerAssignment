const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('companies').then((companyList)=>{

      res.render('index', {companies: companyList});
    })
  },

  create: function(req, res){
    knex('companies')
      .insert({
        name: req.body.name,
        description: req.body.description,
        suite: req.body.suite
      }, '*')
      .then((result)=>{
        res.redirect('/');
      })
  },

  getOne: function(req, res){
    knex('companies')
      .where('id', req.params.id)
      .then((company)=>{

        knex('members')
          .where('company_id', req.params.id)
          .then((memberList)=>{


            res.render('profile', {com: company[0], members: memberList});

          })

      });
  }
}
