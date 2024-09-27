interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark";
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "light", // theme prop takes only "light" or "dark" value
  },
};
