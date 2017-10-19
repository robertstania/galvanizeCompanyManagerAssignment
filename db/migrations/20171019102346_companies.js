
exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', (table)=>{
    table.increments();
    table.string('name');
    table.text('description');
    table.integer('suite');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
