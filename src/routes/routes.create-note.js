const express = require('express');
const router = express.Router();


router.post('/create-note', (req, res, next)=>{
    async function register(){
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host:'srv550.hstgr.io',
            user: 'u490408680_lferquint',
            password: 'Mgzalv.21',
            database: 'u490408680_first_database', 
        });

        const data = await connection.execute(`insert into note(user_id, note_content, date_note) values (${req.body.user_id}, '${req.body.nota}', '${req.body.date_note_create}')`);

    }
    register();
    res.redirect( 307,'/login');
});

module.exports = router;