const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  return productPrices[productName];
};

//solution 
const productPricesOne: { [key: string]: number } = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPriceOne = (productName: keyof typeof productPricesOne): number | undefined => {
  return productPricesOne[productName];
};