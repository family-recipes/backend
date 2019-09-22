const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    add,
    findById,
    findByUserId,
    update,
    remove
};

function find() {
    return db('recipes').select('title', 'author', 'image', 'ingredients', 'instructions', 'category');
}

function findBy(filter) {
    return db('recipes').where(filter);
}

function add(recipe) {
    return db('recipes')
        .insert(recipe, 'id')
        .then(ids => {
        const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function findByUserId(user_id) {
    return db('recipes')
        .where({ user_id })
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