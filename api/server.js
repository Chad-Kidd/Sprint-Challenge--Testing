const express = require('express');

// const Games = require('../games/gamesModel');
const gamesRouter = require('../games/gamesRouter');

const server = express();

server.use(express.json());

//add gamesRouter
server.use('/games', gamesRouter);

//test PASSED
server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/games', async (req, res) => {
    const rows = await Games.getAll();
  
    res.status(200).json(rows);
  });
module.exports = server;