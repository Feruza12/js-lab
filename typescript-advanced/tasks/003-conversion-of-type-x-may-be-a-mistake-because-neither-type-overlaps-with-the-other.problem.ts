interface Dog {
  bark: boolean;
}

let cat = {
  purr: true
};

let dog:Dog ={
  ...cat,
  bark:true
};