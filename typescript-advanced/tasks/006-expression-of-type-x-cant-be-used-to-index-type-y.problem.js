var productPrices = {
    Apple: 1.2,
    Banana: 0.5,
    Orange: 0.8,
};
var getPrice = function (productName) {
    return productPrices[productName];
};
console.log(getPrice('Apple'));
