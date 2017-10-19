
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: 'Clear Voice', description:"makes a product to help creative individuals promote themselves", suite:100},
        {name: 'Coplex', description:"dev shop", suite:132},
        {name: 'Dont suck at work', description:"Hr stuff", suite:200}
      ]);
    });
};
