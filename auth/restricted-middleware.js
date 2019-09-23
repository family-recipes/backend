const jwt = require('jsonwebtoken');

const secrets = require('../config/keys.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({
                    message: 'not verified'
                });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({
            message: 'no token provided'
        });
    }
};