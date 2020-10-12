const FoodType = require('../../models/product/foodType.model');

exports.getFoodTypes = async (req, res, next) => {
    try {
        const foodTypes = await FoodType.fetchAll();
        return res.status(200).json(JSON.parse(foodTypes))
    } catch (e) {
        throw new Error(e)
    }
}
