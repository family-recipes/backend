
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable().unique();
        tbl.string('author', 64);
        tbl.string('instructions').notNullable();
        tbl.string('ingredients').notNullable();
        tbl.string('category').notNullable();
        tbl.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
};