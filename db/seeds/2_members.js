
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {company_id: 1, first_name:"elle", last_name:"something", email:"something@clearvoice.com", position:"fs web dev!"},
        {company_id: 1, first_name:"Jeff", last_name:"something", email:"jeff@clearvoice.com", position:"Web dev"},
        {company_id: 3, first_name:"Jess", last_name:"something", email:"jess@dontsuckatwork.com", position:"Manager"},
      ]);
    });
};
