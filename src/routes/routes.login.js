const express = require('express')
const router = express.Router();

router.use('/login', (req, res)=>{
    async function main() {
        // get the client
        const mysql = require('mysql2/promise');
        // create the connection
        const connection = await mysql.createConnection({
            host:'srv550.hstgr.io',
            user: 'u490408680_lferquint',
            password: 'Mgzalv.21',
            database: 'u490408680_first_database', 
        });
        // query database
        // console.log(req.body.password)
        const data = await connection.execute(`SELECT * FROM usuarios where usuarios.username = ? AND ? = usuarios.password`, [req.body.username, req.body.password]);
        
        // console.log(data);
        if(data[0][0]){
            const data_2 = await connection.execute(`SELECT note.note_content, note.date_note, note.id FROM usuarios JOIN note on usuarios.id = note.user_id WHERE usuarios.id = ${data[0][0].id}`);
            
            const fechaActual = new Date();
            // Obtener los componentes de la fecha (año, mes y día)
            const year = fechaActual.getFullYear();
            const month = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Meses están basados en 0
            const day = String(fechaActual.getDate()).padStart(2, '0');
            
            // Formatear la fecha en formato 'yyyy-mm-dd'
            const formatoDeseado = `${year}-${month}-${day}`;
            // console.log(formatoDeseado)
            data_2[0].forEach((object)=>{
                const fechaPost = object.date_note;
                // Obtener los componentes de la fecha (año, mes y día)
                const year_post = fechaPost.getFullYear();
                const month_post = String(fechaPost.getMonth() + 1).padStart(2, '0'); // Meses están basados en 0
                const day_post = String(fechaPost.getDate()).padStart(2, '0');
                
                // Formatear la fecha en formato 'yyyy-mm-dd'
                const formatoDeseadoPost = `${year_post}-${month_post}-${day_post}`;
                object.date_note = formatoDeseadoPost;
            });

            if(!data_2[0][0]){
                res.render('dashboard-user', {
                    layout: 'dashboard', 
                    username: `${req.body.username}`, 
                    title_header: 'Titulo personalizado', 
                    note_true_false: '//Aún no tienes notas',
                    // posts_from_user: [
                    //     {note_value: 'Esta es mi primera nota', date_note: '2021-08-02'},
                    //     {note_value: 'Esta es mi segunda nota', date_note: '2021-02.03'}
                    // ],
                    user_id: data[0][0].id,
                    id: data[0][0].id,
                    date_note_create: formatoDeseado,
                    password: req.body.password

                });

            }else{
                console.log(data_2[0])
                res.render('dashboard-user', {
                    layout: 'dashboard', 
                    username: `${req.body.username}`, 
                    title_header: 'Titulo personalizado', 
                    posts_from_user: data_2[0],
                    user_id: data[0][0].id,
                    date_note_create: formatoDeseado,
                    password: req.body.password,
                    id: data[0][0].id
                });
            }

        }else{
            res.send('usuario no encontrado')
        }
    }
    main();

});

module.exports = router;