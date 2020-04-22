
exports.up = function(knex) {
  return knex.schema
    .createTable('car_owners', function (carOwnersTable) {
      carOwnersTable.increments('id');
      carOwnersTable.string('first_name', 255).notNullable();
      carOwnersTable.string('last_name', 255).notNullable();
      carOwnersTable.string('email').notNullable();
      carOwnersTable.string('country').notNullable();
      carOwnersTable.string('car_model').notNullable();
      carOwnersTable.integer('car_model_year').notNullable();
      carOwnersTable.string('car_color').notNullable();
      carOwnersTable.string('gender').notNullable();
      carOwnersTable.string('job_title').notNullable();
      carOwnersTable.text('bio', 'longtext').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('car_owners')
};