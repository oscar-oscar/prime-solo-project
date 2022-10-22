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
    } else {
        res.sendStatus(403); // 403 forbidden. user must log in.
        // 401: unauthorized even if logged in (must be admin) 
    }

});
/**
 * GET route for selected game on /details
 */
// router.get('/:id', (req, res) => {

//     console.log('/:id GET route');
//     console.log('is authenticated?', req.isAuthenticated());
//     console.log('user', req.user);
//     //if user is logged in run query

//     if (req.isAuthenticated()) {
//         //selects where game matches id passed
//         const query = `SELECT * FROM "game" WHERE "user_id" = $1 AND "id" =$2`;
//         //passing array = req.params.id
//         pool.query(query, [req.user.id, req.params.id]) // game passed
//             .then(result => {
//                 res.send(result.rows[0]);
//                 console.log('success getting specific game')
//             })
//             .catch(error => {
//                 console.log('ERROR getting specific game from server', error)
//                 res.sendStatus(500)
//             })
//     }else{
//         res.sendStatus(403); // 403 forbidden (must log in)
//     }
// });



/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});



module.exports = router;
