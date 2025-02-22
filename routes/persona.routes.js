const express = require('express');
const PersonaController = require('../controllers/persona.controller');
const router = express.Router();

//Obtener todas las personas
router.get('/', PersonaController.getAllPersonas);
//Obtener persona por su id
router.get('/id/:id', PersonaController.getPersonaById);
//Crear persona
router.post('/', PersonaController.createPersona);
//Actualizar persona
router.put('/:id', PersonaController.updatePersona);
//Eliminar persona
router.delete('/:id', PersonaController.deletePersona);

module.exports = router;