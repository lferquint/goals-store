const express = require('express')
const router = express.Router();


router.use(express.urlencoded({extended: true}));

router.post('/new-user', (req, res)=>{

    async function main(email, user, password) {
        // get the client
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host:'srv550.hstgr.io',
            user: 'u490408680_fernando',
            password: 'Mgzalv.21',
            database: 'u490408680_second_db', 
        });
        // query database
        const data = await connection.execute(`INSERT INTO usuarios (username, email, password) values ('${req.body.username}', '${req.body.email}', '${req.body.password}');`);
        
    }
    main();

    
    res.render('message', {content: req.body.username, layout: 'main', title_header: 'Hola'})

});

module.exports = router;