interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark";
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "light", // theme prop can only be 'light or 'dark'
  },
};

export {}; // To resolve "Cannot redeclare block-scoped variable"
