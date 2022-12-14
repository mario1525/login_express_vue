const conexion = require('../connection');

module.exports = {
    async insertar( Nombre, Apellido){
        let resultados = await conexion.query(`insert into personas
        (Nombre, Apellido)
        values
        ($1, $2)`, [Nombre, Apellido]);
        return resultados;
    },

    async obtener() {
        let resultados = await conexion.query('select * from personas');
        return resultados.rows;
    },

    async delete(id){
        const resultado = await conexion.query('delete from personas where id = $1', [id]);
        return resultado;
    },

    async update(id, nombre, apellido){
        const resultados = conexion.query(`update productos
        set nombre = $1,
        apellido = $2
        where id = $3`, [nombre, apellido, id]);
        return resultados;
    }
}