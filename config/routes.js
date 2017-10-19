//Update the name of the controller below and rename the file.
const company = require("../controllers/company.js");
const member = require("../controllers/member.js");
module.exports = function(app){

  app.get('/', company.index);

  app.get('/company/:id', company.getOne);

  app.post('/member/:co_id', member.create);

  app.post('/company', company.create);
}
