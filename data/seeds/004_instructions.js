exports.seed = function(knex, Promise) {
    return knex('instructions').insert([
        { instruction: '1. Break eggs into bowl and whisk to combine.', recipe_id: '1' },
        { instruction: '2. Heat pan over medium-high heat and add butter or oil.', recipe_id: '1' },
        { instruction: '3. Add eggs and cook while continually stirring.', recipe_id: '1' },
        { instruction: '4. Cook until done and enjoy.', recipe_id: '1' },
        { instruction: '1. Spread peanut butter on one side of a single piece of bread.', recipe_id: '2' },
        { instruction: '2. Spread jelly onto one side of the other piece of bread.', recipe_id: '2' },
        { instruction: '3. Combine sides together and enjoy.', recipe_id: '2' },
        { instruction: '1. Place cheese between two pieces of bread.', recipe_id: '3' },
        { instruction: '2. Spread butter onto the outter sides of the sandwich.', recipe_id: '3' },
        { instruction: '3. Heat pan over medium heat and place sandwich into pan.', recipe_id: '3' },
        { instruction: '4. Flip sandwich occassionally to ensure even toasting on both sides.', recipe_id: '3' }
    ]);
};