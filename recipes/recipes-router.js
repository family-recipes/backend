const router = require('express').Router();

const Recipes = require('./recipes-model.js');

// Get all recipes
router.get('/recipes', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve recipes' })
    });
});

// Get recipe by user id
router.get('/:user_id/recipes', (req, res) => {
    const { user_id } = req.params;

    Recipes.findByUserId( user_id )
    .then(recipes => {
        if (recipes) {
            res.json(recipes);
        } else {
            res.status(404).json({ message: 'Could not find recipes associated with user'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
    });
}); 

// Create a new recipe
router.post('/:user_id/recipes', (req, res) => {
    const recipeData = {...req.body, user_id: req.params };
  
    Recipes.add(recipeData)
    .then(recipe => {
        res.status(201).json(recipe);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new recipe' });
    });
});

//
router.put('/:user_id/recipes/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Recipes.findById(id)
    .then(recipe => {
      if (recipe) {
        Recipes.update(changes, id)
        .then(updatedRecipe => {
          res.json(updatedRecipe);
        });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update recipe' });
    });
  });
  

  router.delete('/:user_id/recipes/:id', (req, res) => {
    const { id } = req.params;
  
    Recipes.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete recipe' });
    });
  });
  
  module.exports = router;