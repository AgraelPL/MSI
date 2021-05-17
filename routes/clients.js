const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clientsController');

router.post('/addClient', clientsController.addClient);
router.post('/updateClient', clientsController.updateClient);
router.delete('/deleteClient', clientsController.deleteClient);


module.exports = router;