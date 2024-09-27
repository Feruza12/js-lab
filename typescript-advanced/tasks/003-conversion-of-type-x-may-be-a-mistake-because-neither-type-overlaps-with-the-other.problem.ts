// 1. Solution by adding bark property into 'cat' object
interface Dog {
  bark: boolean;
}
// it's enough to have 'bark' property in an obeject to be casted into Dog interface
let cat = { purr: true, bark: false };

let dog = cat as Dog;

// 2. Solution by using 'unknown' type
interface AnotherDog {
  bark: boolean;
}

let anotherCat = { purr: true };

let anotherDog = anotherCat as unknown as AnotherDog;

// 3 Solution by creating new Cat interface
interface Cat {
  purr: boolean;
}

let otherCat = { purr: true };

let convertedCat = cat as Cat;
