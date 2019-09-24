
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable().unique();
        tbl.string('author', 64);
        tbl.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient', 64).notNullable();
        // foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('instruction').notNullable();
        // foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
    })
    .createTable('categories', tbl => {
        tbl.increments();
        tbl.string('category', 64).notNullable();
        // foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('categories')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};