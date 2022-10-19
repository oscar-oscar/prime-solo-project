const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('/dashboard GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('req.user:', req.user);
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "game" WHERE "user_id" =$1 ORDER BY "played_at" DESC`;
        //current user logged in id
        pool.query(queryText, [req.user.id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get Games', err);
                res.sendStatus(500)
            })
    }else {
        res.sendStatus(403); // 403 forbidden. user must log in.
                            // 401: unauthorized even if logged in (must be admin) 
    }


});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
