interface Dog {
  bark: boolean;
}

let cat = { purr: true };

let dog = cat as unknown as Dog;
// making cat type is unknow solves the problem

//2-way
let dog2: Dog = { bark: true };

//3-way
// Create a new object that includes properties from both
let dog3: Dog & typeof cat = { ...cat, bark: true };

