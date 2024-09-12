interface Dog {
  bark: boolean;
}

let cat = { purr: true };

let dog = cat as Dog;

//solution 1
interface DogSolutionFirst {
  bark: boolean;
}

let catSolutionFirst = { bark: true }; 

let dogSolution = catSolutionFirst as DogSolutionFirst; 