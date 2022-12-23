const express = require('express');
const router = express.Router();

const perModel = require("../models/model");

router.get('/', (req, res , next)=>{
    perModel
    .obtener()
    .then(personas =>{
        console.log(personas);
        res.render("personas/ver", {
            personas: personas,
        });
    })
    .catch(err =>{
        console.log(err);
        return res.status(500).send("Error obteniendo personas");
    });
});

router.get('/agregar', function (req, res, next) {
    res.render("personas/agregar");
});

router.post('/insertar', function (req, res, next) {
    // Obtener el nombre y precio. Es lo mismo que
    // const nombre = req.body.nombre;
    // const precio = req.body.precio;
    const { nombre, apellido } = req.body;
    if (!nombre || !apellido) {
        return res.status(500).send("No hay nombre o apellido");
    }
    // Si todo va bien, seguimos
    perModel
        .insertar(nombre, precio)
        .then(idPersonaInsertada => {
            res.redirect("/personas");
        })
        .catch(err => {
            return res.status(500).send("Error insertando persona");
        });
});

router.get('/eliminar/:id', function (req, res, next) {
    perModel
        .eliminar(req.params.id)
        .then(() => {
            res.redirect("/personas");
        })
        .catch(err => {
            return res.status(500).send("Error eliminando");
        });
});

router.get('/editar/:id', function (req, res, next) {
    perModel
        .obtenerPorId(req.params.id)
        .then(personas => {
            if (personas) {
                res.render("personas/editar", {
                    personas: personas,
                });
            } else {
                return res.status(500).send("No existe persona con ese id");
            }
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo personas");
        });
});

router.post('/actualizar/', function (req, res, next) {
    // Obtener el nombre y precio. Es lo mismo que
    // const nombre = req.body.nombre;
    // const precio = req.body.precio;
    const { id, nombre, apellido } = req.body;
    if (!nombre || !apellido || !id) {
        return res.status(500).send("No hay suficientes datos");
    }
    // Si todo va bien, seguimos
    perModel
        .actualizar(id, nombre, apellido)
        .then(() => {
            res.redirect("/personas");
        })
        .catch(err => {
            return res.status(500).send("Error actualizando personas");
        });
});

module.exports = router;