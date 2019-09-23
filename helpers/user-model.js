const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findBy,
  add,
  findById,
  remove
};

function find() {
  return db('users').select('id', 'username');
};

function findBy(filter) {
  return db('users').where(filter);
};

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
};

function remove(id) {
  return db('users')
    .where({ id })
    .first()
    .delete();
};
