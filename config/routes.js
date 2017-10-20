//Update the name of the controller below and rename the file.
const company = require("../controllers/company.js");
const member = require("../controllers/member.js");
const admin = require("../controllers/admin.js")
module.exports = function(app){

  app.get('/login', admin.login);

  app.post('/login', admin.check);

  //everything below this is protected
  app.use(loginAuthentication);
  
  app.get('/', company.index);

  app.get('/company/:id', company.getOne);

  app.post('/member/:co_id', member.create);

  app.post('/company', company.create);
}

function loginAuthentication(req,res,next){
  if(req.session.admin){
    next();
  }else{
    res.redirect('/login');
  }
}
