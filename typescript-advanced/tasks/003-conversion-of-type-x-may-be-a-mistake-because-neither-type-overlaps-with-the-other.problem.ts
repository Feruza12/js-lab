// workaround #1 : create a general interface Animal with the makesNoise property
interface Animal {
    makesNoise: boolean;
}

let cat = { makesNoise: true };

let dog = cat as Animal;

// workaround #2 : silence the dog
interface Dog {
    bark: boolean;
}

let cat2 = { purr: true, bark: false };

let dog2 = cat2 as Dog; // can only squeal now

// workaround #3 : create separate interfaces for each animal
interface Dog {
    bark: boolean;
}

interface Cat {
    purr: boolean;
}

let cat3: Cat = { purr: true };

let dog3: Dog = { bark: true };
