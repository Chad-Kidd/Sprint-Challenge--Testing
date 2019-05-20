const router = require('express').Router();

const games = require('../games/gamesModel');

//check
router.get('/', async (req, res) => { console.log("INSERTING")
    try {
        const duke = await games.getAll();
        res.status(200).json(duke);
    } catch (err) {
        res.status(500).json({ error: 'I should have known those alien maggots booby-trapped this sub' })
    }
});

//check POST / for 422 STATUS CODE MVP REQUIRMENTS
router.post('/', async (req, res) => {
    try {
        const game = await games.insert(req.body);
        res.status(201).json(game)
    } catch (err) {
        res.status(422).json({ error: "Nice try buster you dont have the data! " })
    }
    
});

//check
router.delete('/:id', async (req, res)  => {
    const {id} = req.params;
    try {
        const health = await games.remove(id).then(health => {
            res.status(200).json(health)
        });
        {
            res.status(404).end({ message: 'FATALITY'})
        } res.json(health);
    } catch (err) {
        res.status(500).json({
            message: 'Glitch',
        });
    }
});


module.exports = router; 
