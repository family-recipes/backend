
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', recipe => {
            recipe.increments();

            recipe.string('title', 128).notNullable().unique();
            recipe.string('author', 64);
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('ingredient_number')
                .unsigned()
                .notNullable();
            tbl.string('ingredient')
                .notNullable();    
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('instruction_number')
                .unsigned()
                .notNullable();
            tbl.string('instruction')
                .notNullable();
            tbl.integer('instruction_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('categorys', tbl => {
            tbl.increments();
            tbl.string('category')
            .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('categorys')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
