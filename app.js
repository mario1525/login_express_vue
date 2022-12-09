const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

//port 
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log('Example app listening on port'+ app.get('port'));
});

// Middleware
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

//ruta
app.get('/', (req,res,next)=>{
    res.json({
        message: 'hello world!'
    });
});

// Middleware para Vue.js router modo history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
