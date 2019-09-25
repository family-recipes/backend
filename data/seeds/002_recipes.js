exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { title: 'Scrambled Eggs', author: 'Ryan', instructions: 'Break eggs into bowl and whisk to combine. Heat pan over medium-high heat and add butter or oil. Add eggs and cook while continually stirring. Cook until done and enjoy.', ingredients: 'Eggs, Butter/Oil', category: 'Breakfast', user_id: '1' },
        { title: 'PB&J Sandwich', author: 'Uncle Jerry', instructions: 'Spread peanut butter on one side of a single piece of bread. Spread jelly onto one side of the other piece of bread. Combine sides together and enjoy.',  ingredients: 'Bread, Peanut Butter, Jelly', category: 'Snack', user_id: '2'  },
        { title: 'Grilled Cheese', author: 'Anonymous', instructions: 'Place cheese between two pieces of bread. Spread butter onto the outter sides of the sandwich. Heat pan over medium heat and place sandwich into pan. Flip sandwich occassionally to ensure even toasting on both sides.',  ingredients: 'Bread, Butter, Cheese', category: 'Lunch', user_id: '3'  }
    ]);
};