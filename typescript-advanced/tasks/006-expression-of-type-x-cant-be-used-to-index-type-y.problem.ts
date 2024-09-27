
// 1. Solution with keyof and typeof. Accidental solution :)
const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: keyof typeof productPrices) => {
  return productPrices[productName];
};

console.log(getPrice('Apple'));


// 2. Solution with very weird way
const otherProductPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getOtherPrice = (productName: string) => {
  return otherProductPrices[productName as keyof object];
};

console.log(getOtherPrice('Apple'));