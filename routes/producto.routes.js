const express = require('express');
const ProductoController = require('../controllers/producto.controller');
const router = express.Router();

//Obtener todos los porductos
router.get('/', ProductoController.getAllProductos);
//Obtener producto por su id
router.get('/id/:id', ProductoController.getProductoById);
//Obtener producto por su número de serie
router.get('/numSerie/:numSerie', ProductoController.getProductoByNumSerie);
//Crear producto
router.post('/', ProductoController.createProducto);

module.exports = router;