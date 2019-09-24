const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1, 
          username: 'admin',
          password: bcrypt.hashSync('password', 10),
        },
        {
          id: 2, 
          username: 'admin2',
          password: bcrypt.hashSync('password', 10),
        },
        {
          id: 3, 
          username: 'admin3',
          password: bcrypt.hashSync('password', 10),
        },
      ]);
    });
};