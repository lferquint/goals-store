const express = require('express');
const router = express.Router();

router.post('/delete/:id', (req, res, next)=>{
    async function register(){
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host:'srv1135.hstgr.io',
            user: 'u667942166_fernando',
            password: 'Mgzalv.21',
            database: 'u667942166_my_data_base'
        });
        const data = await connection.execute(`DELETE FROM meta where id = ${req.params.id};`);
        //INSERT INTO usuarios (username, password, email) VALUES ('lferquint', '12345', 'lferquint@gmail.com');
        //insert into meta(user_id, meta_name, meta_state) values (${req.body.user_id}, '${req.body.nota}', 'pendiente')
    }
    register();
    // console.log(req.params.id);
    res.redirect( 307,'/login');

});


module.exports = router;