const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        it ('should return status: (200) OK', () => {
            return request(server)
                .get('/')
                .expect(200);
        });

        it ('should set testing env', () => {
            expect(process.env.DB_ENV).toBe('testing')
        });
    })
})