interface User {
  name: string;
  age?: number;
}

const user1: User = {
  name: "Matt",
};

user1.age = 24;
