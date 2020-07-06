const express = require('express'); 
const cors = require('cors'); 
const morgan = require('morgan'); 

const app = express(); 


//Setings 
app.set('port', process.env.PORT || 8080);

//Middlewares
app.use(cors()); 
app.use(morgan('dev'));
app.use(express.json());

//app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api', require('./routes')); 

module.exports = app;