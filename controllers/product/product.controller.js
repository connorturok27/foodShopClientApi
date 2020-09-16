const Product = require('../../models/product/product.model');

const parseProducts = async (products) => {
    return Promise.all(products.map(async product => {
        let productPrices = await Product.fetchAllPriceTypesByProductId(product.id);
        productPrices = JSON.parse(productPrices);
        productPrices = productPrices.map(price => {
            let productPrice;
            if (price.multiplier === "0") {
                productPrice = product.price
            } else {
                productPrice = price.multiplier.includes('+') ?
                    product.price + parseInt(price.multiplier.split('+')[1]) :
                    product.price - parseInt(price.multiplier.split('-')[1])
            }
            return {
                id: price.id,
                size: price.size,
                price: productPrice
            }
        });

        return {
            id: product.id,
            name: product.name,
            imageURL: product.image_url,
            foodType: product.foodType,
            prices: productPrices,
        }
    }))
}

exports.getProducts = async (req, res, next) => {
    try {
        const {pageSize,page} = req.query;
        let products = await Product.fetchAllWithReferences(parseInt(pageSize), parseInt(page));
        products = JSON.parse(products);
        products = await parseProducts(products);
        res.status(200).json(products)
    } catch (e) {
        throw new Error(e)
    }

}
