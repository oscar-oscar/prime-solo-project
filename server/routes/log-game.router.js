const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route to log a new game
 */
router.post('/', (req, res) => {
    console.log('/log-game POST route');
    console.log(req.body);
    console.log('is authenticated', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "game" 
        ("score_a","score_b","singles","doubles","date","location","partner","opponent_1","opponent_2","notes", "user_id")
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
        pool.query(queryText, [
            req.body.score_a, req.body.score_b,
            req.body.opponent_1, req.body.opponent_2,
            req.body.played_at, req.body.location,
            req.user.id
        ]
        ).then(() => {
            res.sendStatus(201);
        }).catch((e) => {
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403); //forbidden 
    }
});

module.exports = router;
