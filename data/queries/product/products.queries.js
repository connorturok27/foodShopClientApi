exports.selectList = () => {
    return `Select id, name, image_url from Product`
};

exports.selectListWithReferences = () => {
        return `SELECT p.id, p.name,image_url,
        p.price, ft.name 'foodType' 
        From 
        Product p
        INNER JOIN Food_Type ft
        ON p.fk_product_food_type_id = ft.id
        LIMIT ?,?
        ;
`
};

exports.selectListWithReferencesByFoodTypeId = () => {
    return `SELECT p.id, p.name,image_url,
    p.price, ft.name 'foodType' 
    From 
    Product p
    INNER JOIN Food_Type ft
    ON p.fk_product_food_type_id = ft.id
    WHERE ft.id = ?
`
};

exports.selectAllPricesTypes = () => {
    return `SELECT p.id, pt.name,
    pt.id 'priceTypeId', pt.multiplier
    From 
    Product p
    INNER JOIN Product_Prices pp
    ON p.id = pp.product_id 
    INNER JOIN Price_Type pt 
    ON pp.price_type_id = pt.id
`
};

exports.selectPriceTypesForProduct= () => {
    return `Select pp.id,pt.multiplier, pt.id 'priceTypeId', pt.name 'size'
    FROM 
    Product p 
    INNER JOIN 
    Product_Prices pp 
    ON p.id = pp.product_id 
    INNER JOIN 
    Price_Type pt 
    ON pp.price_type_id = pt.id
    WHERE p.id = ?
    ;
    `
};

exports.selectById = () => {
    return `SELECT p.id, p.name, image_url,
        p.price, ft.name 'foodType' 
        From 
        Product p
        INNER JOIN Food_Type ft
        ON p.fk_product_food_type_id = ft.id
        WHERE p.id = ? 
        ;
    `
};
