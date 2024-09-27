interface UserProfile {
  id: string;
  name?: string;
  age?: number;

  preferences: {
    theme: "light" | "dark" | "blue"; // first way: add "blue" to the union
  };
}

var user: UserProfile = {
  id: "123",
  name: "Matt",
  age: 23,
  preferences: {
    theme: "blue", // or change to "light" or "dark"
  },
};
