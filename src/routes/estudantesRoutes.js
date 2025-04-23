const express = require('express');
const router = express.Router();
const estudantesController = require('../controllers/estudantesController');

router.get('/', estudantesController.mostrarEstudantes)
router.post('/', estudantesController.criarEstudante)
router.put('/:id', estudantesController.atualizarEstudante);
router.delete('/:id', estudantesController.deletarEstudante);
router.get('/busca', estudantesController.buscarEstudante);

module.exports = router;
