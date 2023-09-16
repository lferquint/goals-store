const express = require('express');
const app = express();
const router = require('./routes/routes.new-user');
const router_login = require('./routes/routes.login');
const {engine} = require('express-handlebars');
const path = require('path');
const router_new_note = require('./routes/routes.create-note');
const router_update = require('./routes/routes.uptade-note');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use('/static', express.static('./static'));
app.use(router);
app.use(router_new_note);
app.use(router_login);
app.use(router_update);


app.listen(3000);
console.log('server on port 3000')