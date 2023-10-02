
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments()
    })
    .createTable('ingrediants', table => {
        table.increments()
    })
    .createTable('steps', table => {
        table.increments()
    })
    .createTable('step_ingrediants', table => {
        table.increments()
    })
};


exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingrediants')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingrediants')
    .dropTableIfExists('recipes')
};
