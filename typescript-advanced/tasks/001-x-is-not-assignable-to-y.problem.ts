interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark";
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};

//solution 1
interface UserProfileOne {
  id: string;

  preferences: {
    theme: "light" | "dark";
  };
}

let userSolution1: UserProfileOne = {
  id: "123",
  preferences: {
    theme: "light", 
  },
};

//solution 2
interface UserProfileTwo {
  id: string;

  preferences: {
    theme: "light" | "dark" | "blue";
  };
}

let userSolution2: UserProfileTwo = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};