const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {

    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        console.log('the result is', result);
        res.send(result.rows);
    })
})
// post response to database
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback to DB', newFeedback);

    let queryText = `INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments")
                      VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(response => {
            console.log('the response is ',response);
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(`error adding feedback to DB ${err}`);
            res.sendStatus(500);
        });

})
module.exports = router;