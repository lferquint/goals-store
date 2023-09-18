const express = require('express');
const router = express.Router();

router.post('/delete/:id', (req, res, next)=>{
    async function register(){
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host:'srv550.hstgr.io',
            user: 'u490408680_fernando',
            password: 'Mgzalv.21',
            database: 'u490408680_second_db'
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