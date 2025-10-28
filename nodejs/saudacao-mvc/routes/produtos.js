const express = require("express");
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.produtos);
router.get('/camisetas', siteController.camisetas);
router.get('/cadastrar', produtosController.formCadProd);
router.post('/cadastrar', produtosController.cadastrar);

module.exports = router;