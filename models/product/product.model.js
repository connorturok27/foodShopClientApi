const db = require('../../utils/database');
const productQuery = require('../../data/queries/product/products.queries');

module.exports = class Product {

    constructor(id, name, price, fk_product_food_type_id, price_type_id, image_url) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.fk_product_food_type_id = fk_product_food_type_id;
        this.price_type_id = price_type_id;
        this.image_url = image_url;

    }

    static fetchAllWithReferences(pageSize, page) {
        return db.select(productQuery.selectListWithReferences(),
            [db.offset(pageSize, page) || 0, pageSize < 0 ? 0 : pageSize || 10])
    }

    static fetchAllPriceTypesByProductId(id) {
        return db.select(productQuery.selectPriceTypesForProduct(), [id])
    }
};
