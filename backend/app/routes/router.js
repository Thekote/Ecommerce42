const { Router } = require('express');
const controllers = require('../controllers/product.js');
const router = Router();


router.post('/product', controllers.createProduct);

router.get('/product', controllers.listProduct);
router.get('/product/:id', controllers.findOneProduct);

router.put('/product/:id', controllers.updateProduct);
router.put('/product/:id/enable', controllers.enableProduct);
router.put('/product/:id/disable', controllers.disableProduct);



module.exports = router;
