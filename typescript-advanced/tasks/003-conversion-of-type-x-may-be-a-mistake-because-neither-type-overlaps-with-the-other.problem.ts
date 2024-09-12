// First solution: we can add purr property to Dog interface
interface Dog {
  bark: boolean;
  purr: boolean
}

let cat = { purr: true };
let dog = cat as Dog;


// Second solution: if we want to get both properties
interface Dog1 {
  bark: boolean;
}

let cat1 = { purr: true, bark: true };
let dog1:Dog1 = cat1;

//Or:
interface Dog2 {
  bark: boolean;
}

let cat2 = { purr: true};
let dog2:Dog2 = {...cat2, bark: true };