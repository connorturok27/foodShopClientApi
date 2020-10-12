const db = require('../../utils/database');
const query = require('../../data/queries/product/foodType.query');

module.exports = class FoodType {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fetchAll() {
        return db.select(query.fetchAll())
    }
};
