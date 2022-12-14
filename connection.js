const { Client } = require('pg');

//configuracion de la base de datos 
const connectionData = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'menssage',
    password: 'mario143',
    port: 5432,
  }
const client = new Client(connectionData)

client.connect();

client.query('SELECT * FROM personas')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })