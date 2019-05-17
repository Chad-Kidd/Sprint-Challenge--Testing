const db = require('../data/dbConfig');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

// for POST endpoint title, genre, releaseYear object
async function insert(games) {
    const [id] = await db('games').insert(games, 'id')

    return db('games')
    .where({ id }, 'id', 'title', 'genre')
    .first()
}

async function update(id, changes) {
    return null;
}

async function remove(id) {
    return db('games')
    .where( 'id', Number(id) )
    .del()
}

function getAll() {
    return db('games');
}

function findById(id) {
    return null;
} 