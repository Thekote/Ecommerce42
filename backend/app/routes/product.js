const { Router } = require('express');
const controllers = require('../controllers/product.js');
const router = Router();


router
    .post('/product', controllers.createProduct)
    .get('/product', controllers.listProduct)
    .get('/product/:id', controllers.findOneProduct)
    .put('/product/:id', controllers.updateProduct)
    .patch('/product/:id/enable', controllers.enableProduct)
    .patch('/product/:id/disable', controllers.disableProduct);



module.exports = router;
