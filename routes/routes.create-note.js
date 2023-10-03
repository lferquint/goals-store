const express = require('express');
const router = express.Router();


router.post('/create-note', (req, res, next)=>{
    async function register(){
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host:'srv1135.hstgr.io',
            user: 'u667942166_fernando',
            password: 'Mgzalv.21',
            database: 'u667942166_my_data_base'
        });

        const data = await connection.execute(`insert into meta(user_id, meta_name, meta_state) values (${req.body.user_id}, '${req.body.nota}', 'pendiente')`);
        //INSERT INTO usuarios (username, password, email) VALUES ('lferquint', '12345', 'lferquint@gmail.com');
        //insert into meta(user_id, meta_name, meta_state) values (${req.body.user_id}, '${req.body.nota}', 'pendiente')
    }
    register();
    res.redirect( 307,'/login');
});

module.exports = router;