const conexion = require('../connection');

module.exports = {
    async insertar( nombre, apellido){
        let resultados = await conexion.query(`insert into personas
        (nombre, apellido)
        values
        ($1, $2)`, [nombre, apellido]);
        return resultados;
    },

    async delete(id){
        const resultado = await conexion.query('delete from personas where id = $1', [id]);
        return resultado;
    }
}