const router = require('express').Router();

const Recipes = require('../data/models/recipes-model.js');
const restricted = require('../helpers/auth/restricted-middleware.js');

// Get all recipes
router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve recipes' })
    });
});

// Get recipe by id
router.get('/:id', (req, res) => {
const { id } = req.params;

  Recipes.findById(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => 
      res.status(500).send(error));
});

// Get recipe from specific user id
router.get('/user/:user_id', (req, res) => {
  const { user_id } = req.params;
  
    Recipes.findRecipesByUserId(user_id)
      .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(error => 
        res.status(500).send(error));
  });

// Create a new recipe
router.post('/', (req, res) => {
    const recipeData = req.body;

    Recipes.add(recipeData)
    .then(recipe => {
        res.status(201).json(recipe);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new recipe' });
    });
});

//
router.put('/:id', (req, res) => {
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
  

  router.delete('/:id', (req, res) => {
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