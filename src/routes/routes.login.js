const express = require('express')
const router = express.Router();

router.use('/login', (req, res)=>{
    async function main() {
        // get the client
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host:'srv550.hstgr.io',
            user: 'u490408680_fernando',
            password: 'Mgzalv.21',
            database: 'u490408680_second_db'
        });
        // query database
        // console.log(req.body.password)
        const data = await connection.execute(`SELECT * FROM usuarios where usuarios.username = ? AND ? = usuarios.password`, [req.body.username, req.body.password]);
  
        // console.log(data);
        if(data[0][0]){
            const data_2 = await connection.execute(`SELECT meta.meta_name, meta.meta_state, meta.id, usuarios.password, usuarios.username FROM meta JOIN usuarios on usuarios.id = meta.user_id WHERE usuarios.id = ${data[0][0].id};`);
            //SELECT meta.meta_name, meta.meta_state FROM meta JOIN usuarios on usuarios.id = meta.user_id WHERE usuarios.id = 1; ${data[0][0].id}
            // data_2[0].forEach((object)=>{
            //     const fechaPost = object.date_note;
            //     // Obtener los componentes de la fecha (año, mes y día)
            //     const year_post = fechaPost.getFullYear();
            //     const month_post = String(fechaPost.getMonth() + 1).padStart(2, '0'); // Meses están basados en 0
            //     const day_post = String(fechaPost.getDate()).padStart(2, '0');
                
            //     // Formatear la fecha en formato 'yyyy-mm-dd'
            //     const formatoDeseadoPost = `${year_post}-${month_post}-${day_post}`;
            //     object.date_note = formatoDeseadoPost;
            // });


            if(!data_2[0][0]){
                res.render('dashboard-user', {
                    layout: 'dashboard', 
                    username: `${req.body.username}`, 
                    title_header: 'Titulo personalizado', 
                    note_true_false: "You don't have goals right now",
                    // posts_from_user: [
                    //     {note_value: 'Esta es mi primera nota', date_note: '2021-08-02'},
                    //     {note_value: 'Esta es mi segunda nota', date_note: '2021-02.03'}
                    // ],
                    user_id: data[0][0].id,
                    id: data[0][0].id,
                    password: req.body.password

                });

            }else{
                res.render('dashboard-user', {
                    layout: 'dashboard', 
                    username: `${req.body.username}`, 
                    title_header: 'Titulo personalizado', 
                    posts_from_user: data_2[0],
                    user_id: data[0][0].id,
                    password: req.body.password,
                    id: data[0][0].id
                });
            }

        }else{
            res.send('usuario o contraseña incorrecta')
        }
    }
    main();

});

module.exports = router;