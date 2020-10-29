const express = require('express');
const router = express.Router();

const productController = require('../controllers/product/product.controller');
const foodTypeController = require('../controllers/product/foodType.controller');

router.get('/food', productController.getProducts);
router.get('/food/:foodId', productController.getSingleProduct);
router.get('/foodType', foodTypeController.getFoodTypes);

module.exports = router;
