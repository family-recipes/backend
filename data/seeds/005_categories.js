exports.seed = function(knex, Promise) {
    return knex('categories').insert([
        { category: 'Breakfast', recipe_id: '1' },
        { category: 'Snack', recipe_id: '2' },
        { category: 'Lunch', recipe_id: '3' }
    ]);
};