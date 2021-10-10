//Importar librerias//
// Por si no funciona...wey, mira: require('dotenv').config();//
const express = require('express');
const app = express();
const cors = require('cors')
require('./database');

// settings
app.set('port', process.env.PORT || 4001);

// middlewares
app.use(cors());
app.use(express.json());

// routes app.use('/api/users', require('./routes/users')); 
app.use('/api/blogs', require('./routes/blogs'));

// start server
app.listen(app.get('port'), () => console.log('server started listening on port', app.get('port')));