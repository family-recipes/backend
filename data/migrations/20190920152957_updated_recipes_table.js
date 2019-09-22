
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable().unique();
        tbl.string('author', 64);
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 64).notNullable().unique();
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
        tbl.string('category_name', 64).notNullable().unique();
    })
    .createTable('recipe_categories', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
        tbl.integer('category_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('categories');
        tbl.primary(['recipe_id', 'category_id']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_categories')
    .dropTableIfExists('categories')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
