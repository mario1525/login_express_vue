const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express()

//modulos 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

//busca un puerto disponible
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log('Example app listening on port'+ app.get('port'));
});

//la raiz del programa 
app.get('/', (req,res)=>{
    res.send('app hola mundo');
});
