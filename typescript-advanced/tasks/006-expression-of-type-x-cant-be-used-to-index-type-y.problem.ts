// String might be an undefined, so, the solution is to list all valid keys as types
const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: "Apple" | "Banana" | "Orange") => {
  return productPrices[productName];
};


// we can define productPrices1 keys as string and value as number
const productPrices1: {[key: string]: number} = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice1 = (productName: string) => {
  if(productName in productPrices1){
    return productPrices[productName];
  }
};