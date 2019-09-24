exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient: 'Eggs', recipe_id: '1' },
        { ingredient: 'Butter/Oil', recipe_id: '1' },
        { ingredient: 'Bread', recipe_id: '2' },
        { ingredient: 'Peanut Butter', recipe_id: '2' },
        { ingredient: 'Jelly', recipe_id: '2' },
        { ingredient: 'Bread', recipe_id: '3' },
        { ingredient: 'Butter', recipe_id: '3' },
        { ingredient: 'Cheese', recipe_id: '3' }
    ]);
};