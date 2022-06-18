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

module.exports = router;