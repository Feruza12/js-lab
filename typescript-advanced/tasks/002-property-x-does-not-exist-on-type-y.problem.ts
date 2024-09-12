const user = {
  name: "Matt",
};

user.age = 24;

//solution 1
interface UserFirst {
  name: string;
  age?: number;
}

const userSolutionFirst: UserFirst = {
  name: "Matt",
};

userSolutionFirst.age = 24; 

//solution 2
const userSolutionSecond: { name: string; age?: number } = {
  name: "Matt",
};

userSolutionSecond.age = 24;