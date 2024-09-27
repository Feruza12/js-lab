// ERROR: Conversion of type '{ purr: boolean; }' to type 'Dog' may be a mistake...

interface Dog {
  bark: boolean;
}

let cat = { purr: true };

// --- FIX: convert the expression to unknown first ---
let dog = cat as unknown as Dog;
