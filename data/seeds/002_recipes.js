exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { 
            title: 'Scrambled Eggs', 
            author: 'Ryan', 
            instructions: 'Break eggs into bowl and whisk to combine. Heat pan over medium-high heat and add butter or oil. Add eggs and cook while continually stirring. Cook until done and enjoy.', 
            ingredients: 'Eggs, Butter/Oil', 
            category: 'Breakfast',
            user_id: '1' 
        },
        { 
            title: 'PB&J Sandwich',
            author: 'Uncle Jerry',
            instructions: 'Spread peanut butter on one side of a single piece of bread. Spread jelly onto one side of the other piece of bread. Combine sides together and enjoy.',  
            ingredients: 'Bread, Peanut Butter, Jelly', 
            category: 'Snack', 
            user_id: '2'  
        },
        { 
            title: 'Grilled Cheese',
            author: 'Anonymous', 
            instructions: 'Place cheese between two pieces of bread. Spread butter onto the outter sides of the sandwich. Heat pan over medium heat and place sandwich into pan. Flip sandwich occassionally to ensure even toasting on both sides.',  
            ingredients: 'Bread, Butter, Cheese', 
            category: 'Lunch', 
            user_id: '3'  
        },
        { 
            title: 'Baked Potato',
            author: 'Joe Flabeets', 
            instructions: 'Preheat oven 400 degrees fahrenheit. Clean potatoes and poke several holes in each. Place Potatoes in oven and cook for 60 to 80 minutes, or until done. Remove from oven and let cool. Open and serve with toppings.',  
            ingredients: 'Russet Potato, Butter, Cheese, Sour Cream, Salt, Pepper, Chives', 
            category: 'Dinner', 
            user_id: '1'  
        },
        { 
            title: 'Chicken Noodle Soup',
            author: 'Sandy Grunderson', 
            instructions: 'Heat pot on med-high heat. Chop celery, onions, and carrots finely. Add 1 tbsp of oil to pot along with chopped vegetables. Cook until tender. Add chopped cooked chicken along with chicken stock. Heat to boil and simmer for 30 minutes. Add noodles and cook until done.',  
            ingredients: 'Olive Oil, Celery, Carrot, Onion, Cooked Chicken, 4 cups Chicken Stock, Noodles', 
            category: 'Lunch', 
            user_id: '2'  
        },
        { 
            title: 'Yorkshire Pudding',
            author: 'Claire Doubtfire', 
            instructions: 'Preheat oven to 375 degrees fahrenheit. Break eggs into mixing bowl. Add milk, flour, and salt. Let mixture sit for 20 minutes. Meanwhile, coat pan with oil/roast-drippings. Pour mixture into pan and cook in oven for 20 minutes. Let cool and enjoy.',  
            ingredients: '3 Eggs, 1/3 cup Flour, 1/3 cup Milk, 3/4 tsp Salt, Oil or Roast Drippings', 
            category: 'Dinner', 
            user_id: '3'  
        },
        { 
            title: 'Cinnamon Toast',
            author: 'Marie Katz', 
            instructions: 'Toast bread in toaster. Meanwhile, combine sugar and cinnamon together. Once bread is toasted, spread with butter and coat buttered side with cinnamon sugar. Store remaining cinnamon sugar.',  
            ingredients: 'Sliced Bread, 1/2 cup Sugar, 1 tbsp Ground Cinnamon, 1 tbsp Butter', 
            category: 'Snack', 
            user_id: '1'  
        },
        { 
            title: 'Classic Oatmeal',
            author: 'Star Buckton', 
            instructions: 'Combine oatmeal and water in small cup. Let sit three minutes. Add brown sugar, nuts, and raisins. Enjoy!',  
            ingredients: '1/2 cup  dried Oatmeal, 1/4 cup Hot Water , 1 tbsp Brown Sugar, 1 tbsp Chopped Nuts, 1 tbsp Raisins', 
            category: 'Breakfast', 
            user_id: '2'  
        },
        { 
            title: 'Mac & Cheese',
            author: 'Duke Nuken', 
            instructions: 'Heat water in pot on high heat. Once water boils, add macaroni and cook for about 8 minutes. Drain and set aside. Meanwhile, combine butter and flour in pot to for a roux. Stir in milk. Once the sauce begins to thicken, add cheese, salt, and pepper. Combine pasta and sauce. Enjoy.',  
            ingredients: 'Macaroni, 2 tbsp Butter, 1.5 tbsp Flour, 1 cup milk, 1 cup shredded Cheese, Salt & Pepper to tatse', 
            category: 'Dinner', 
            user_id: '1'  
        },
        { 
            title: 'Reuben Sanwich',
            author: 'Erik Von Somvich', 
            instructions: 'Layer thousand island dressing, pastrami, sour kraut, and swiss chesse. Toast until cheese is melty. Enjoy!',  
            ingredients: 'Rye Bread, Thousand Island Dressing, Pastrami, Sour Kraut, Swiss Cheese', 
            category: 'Lunch', 
            user_id: '1'  
        },
        { 
            title: 'Sundae',
            author: 'IceCream247', 
            instructions: 'Layer 3 scoops of your favorite ice cream into serving dish. Coat ice cream with hot fudge, chopped nuts, whipped cream, and top with cherry.',  
            ingredients: '3 scoops Ice Cream, Hot Fudge, Chopped Nuts, Whipped Cream, Maraschino Cherry', 
            category: 'Dessert', 
            user_id: '2'  
        },
        { 
            title: 'Hard Boiled Eggs',
            author: 'Dr. Robotnik', 
            instructions: 'Boil water in pot on high heat. Carefully lower eggs into water. Turn off heat and cover. Let sit for at least 12 minutes and enjoy.',  
            ingredients: 'Eggs, Salt & Pepper', 
            category: 'Snack', 
            user_id: '3'  
        },
    ]);
};