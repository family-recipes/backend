exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { title: 'Scrambled Eggs', author: 'Ryan', user_id: '1' },
        { title: 'PB&J Sandwich', author: 'Uncle Jerry', user_id: '2'  },
        { title: 'Grilled Cheese', author: 'Anonymous', user_id: '3'  }
    ]);
};