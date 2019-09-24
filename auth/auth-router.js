const router = require('express').Router();
const bcrypt = require('bcryptjs');

const generateToken = require('./token.js');

const Users = require('../data/models/user-model.js');

// Register a new user
router.post('/register', (req, res) => {
    let user = req.body;

    user.password = bcrypt.hashSync(user.password, 6);

    Users.add(user)
    .then(user => {
        const token = generateToken(user);
        res.status(201).json({
            user_id: user.id,
            username: user.username,
            token
        });
    })
    .catch(error => {
        if (error.errno === 19) {
            res.status(500).json({
                message: 'Username is not available.'
            })
        } else {
            res.status(500).json(error);
        }
    });
});

// Login for pre-existing user
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);

            res.status(200).json({ 
                user_id: user.id,
                username: user.username,
                token 
            });
        } else {
            res.status(401).json({ message: 'Invalid Credentials'})
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;