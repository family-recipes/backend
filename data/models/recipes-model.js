const db = require('../dbConfig.js');

module.exports = {
    find,
    findBy,
    add,
    findById,
    update,
    remove
};

function find() {
    return db('recipes')
    .join('ingredients', 'recipes.id', 'ingredients.recipe_id')
}

function findBy(filter) {
    return db('recipes').where(filter);
}

function add(recipe) {
    return db('recipes').insert(recipe)
    .then(ids => {
        return findById(ids[0]);
    });
}

function findById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function update(changes, id) {
    return db('recipes')
    .where({ id })
    .update(changes)
    .then(count => {
        if (count > 0) {
            return findById(id)
            .then(recipe => {
                return recipe;
            });
        } else {
            return null;
        }
    })
}

function remove(id) {
    return findById(id)
    .then(recipe => {
        return db('recipes').where({ id }).del()
        .then(count => {
            if (count > 0) {
                 return recipe;
            } else {
                return null;
            }
        })
    })
}