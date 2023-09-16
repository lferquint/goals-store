const express = require('express');
const router = express.Router();

router.put('/update', (req, res)=>{
    console.log('Si llego buei');
    res.send();

});
// async function hola(){
//     const response = await fetch('http://localhost:3000/update', {method: 'PUT'});
//     // const data = await response.json();
//     // console.log(data);
// }
// hola();

module.exports = router;