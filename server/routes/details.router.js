const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {

    console.log('/:id GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    //if user is logged in run query

    if (req.isAuthenticated()) {
        //selects where game matches id passed
        const query = `SELECT * FROM "game" WHERE "user_id" = $1 AND "id" = $2`;
        //passing array = req.params.id
        pool.query(query, [req.user.id, req.params.id]) // game passed
            .then(result => {
                res.send(result.rows[0]);
                console.log('success getting specific game')
            })
            .catch(error => {
                console.log('ERROR getting specific game from server', error)
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403); // 403 forbidden (must log in)
    }
});

router.delete('/:id', (req, res) => {
    console.log('in Delete router');
    if (req.isAuthenticated()) {
        const queryText = `DELETE from "game" WHERE "id" = $1 AND "user_id" = $2`;
        pool.query(queryText, [req.params.id, req.user.id]).then(() => {
            res.sendStatus(201);
            console.log('successful Delete')
        }).catch((error) => {
            console.log('something went wrong in router.delete', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403); //forbidden, must be logged in
    }
});

router.put('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    
    const queryText = `UPDATE "game" SET "score_a" = $1, "score_b" = $2, "location"= $3,
                      "partner" = $4, "opponent_1" = $5, "opponent_2" = $6, "notes" = $7
                       WHERE "id" = $8 AND "user_id" = $9`; 
    pool.query(queryText, [ req.body.score_a, req.body.score_b, req.body.location,
                            req.body.partner, req.body.opponent_1, req.body.opponent_2, 
                            req.body.notes, req.params.id, req.user.id])
    .then(results => {
        res.sendStatus(200)
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })

})

module.exports = router;