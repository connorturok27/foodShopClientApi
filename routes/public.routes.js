const express = require('express');
const router = express.Router();

const productController = require('../controllers/product/product.controller');

router.get('/food', productController.getProducts);

module.exports = router;
