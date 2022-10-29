const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route to get all on /dashboard
 */
router.get('/', (req, res) => {
    console.log('/dashboard GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('req.user:', req.user);
    //if user is logged in run query
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "game" WHERE "user_id" =$1 ORDER BY "date" DESC`;
        //current user logged in id
        pool.query(queryText, [req.user.id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get Games', err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403); // 403 forbidden. user must log in.
        // 401: unauthorized even if logged in (must be admin) 
    }

});


/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('/log-game POST route');
    console.log(req.body);
    console.log('is authenticated', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "game" 
        ("date",
        "score_a",
        "score_b",
        "location",
        "partner",
        "opponent_1",
        "opponent_2",
        "notes",
        "user_id")
        
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

        pool.query(queryText, [
            req.body.date,
            req.body.score_a,
            req.body.score_b,
            req.body.location,
            req.body.partner,
            req.body.opponent_1,
            req.body.opponent_2,
            req.body.notes,
            req.user.id])
            .then(() => {
                res.sendStatus(201);
            }).catch((error) => {
                console.log(error)
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403); //forbidden 
    }
});



module.exports = router;
