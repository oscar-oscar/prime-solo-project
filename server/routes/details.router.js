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
        const query = `SELECT * FROM "game" WHERE "user_id" = $1 AND "id" =$2`;
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
    }else{
        res.sendStatus(403); // 403 forbidden (must log in)
    }
});

router.delete('/:id', (req, res) => {
    console.log('in Delete router');
    if (req.isAuthenticated()){
        const queryText = `DELETE from "game" WHERE "id" = $1 AND "user_id" = $2`;
        pool.query(queryText, [req.params.id, req.user.id]).then(() => {
            res.sendStatus(201);
            console.log('successful Delete')
        }).catch((error) => {
            console.log('something went wrong in router.delete', error);
            res.sendStatus(500);
        })
    }else {
        res.sendStatus(403); //forbidden, must be logged in
    }
});

module.exports = router;