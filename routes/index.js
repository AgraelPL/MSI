const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/htmlElements', indexController.htmlElements);
router.get('/employees', indexController.employees);
router.get('/invoices', indexController.invoices);
router.get('/delegats', indexController.delegats);
router.get('/clients', indexController.clients);

module.exports = router;