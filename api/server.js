const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const recipeRouter = require('../recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/recipes', recipeRouter);

server.get('/', (req, res) => {
    try {
        res.send('Server is running!')
    } catch(error) {
        res.status(500).json(error.response);
    }
});

module.exports = server;
