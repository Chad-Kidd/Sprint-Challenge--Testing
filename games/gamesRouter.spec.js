const request = require('supertest');
const router = require('./gamesRouter.js');

const server = require('../api/server.js');

// GET /games MVP REQUIRMENTS met returns an array and 200 STATUS CODE
describe('GET /', () => {
    it('should return 200 OK and array', async () => {
        const res = await request(server.use(router)).get('/')
        expect(res.status).toBe(200)
})
});

// POST TEST / for 422 STATUS CODE MVP REQUIRMENTS
describe('POST /', () => {
    it('should return 422 for incorrect game data', async () => {
        const res = await request(server.use(router)).post('/')
        expect(res.status).toBe(422)
    })
});