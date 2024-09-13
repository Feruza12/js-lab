const productPrices = {
    Apple: 1.2,
    Banana: 0.5,
    Orange: 0.8
};

// workaround #1 : check if productName exists in the obj
function getPrice(productName: string): number {
    return productName in productPrices ? productPrices[productName] : -1;
}

// workaround #2 : create an index signature
const productPrices2: { [key: string]: number } = {
    Apple: 1.2,
    Banana: 0.5,
    Orange: 0.8
};

function getPrice2(productName: string): number {
    return productPrices[productName] ?? -1; // maintain a fallback value
}

console.log(getPrice("Apple")); // 1.2
console.log(getPrice("Pineapple")); // -1

