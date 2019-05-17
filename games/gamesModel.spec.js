const db = require('../data/dbConfig.js');
const request = require('supertest');
const server = require('../api/server.js');
const router = require('./gamesRouter.js');
const Games = require('../games/gamesModel');

describe('games model', () => { 
    afterEach(async () => {
            await db('games').truncate()
        })
    describe('insert()', () => {
       
        it('should insert the provided games into the db', async () => {
            await Games.insert({ title: 'Duck Hunt', genre: 'First-person Shooter', releaseYear: 1984 })
            await Games.insert({ title: 'Sonic The Hedgehog', genre: 'Platform game', releaseYear: 1991 })
            await Games.insert({ title: 'Donkey Kong Country', genre: 'Platform game', releaseYear: 1994 })
            await Games.insert({ title: 'Tomb Raider: Underworld', genre: 'Action-adventure', releaseYear: 2008 })
            await Games.insert({ title: 'Grand Theft Auto', genre: 'Action-adventure', releaseYear: 1997 })
            
            const games = await db('games')
            expect(games).toHaveLength(5)
        })
    });
});

// describe('games model', () => {
//     describe('remove()', () => {
//         beforeEach(async () => {
//             await db('games')
//         })
//         it('should remove the provided games from the db', async () => {
//             // await Games.remove({ title: 'Grand Theft Auto', genre: 'Action-adventure', releaseYear: 1997 })

//             const games = await db('games')
//             expect(games).toHaveLength(1)
//         })
//     });
// }); 