interface UserProfile {
  id: string;
  age?: number; 
  // adding age to the user profile
  // making it optional(?) is necessary to use desired properties when used

  preferences: {
    theme: "light" | "dark" | "blue";
    // adding blue to the theme
    
  };
}

let user: UserProfile = {
  id: "123",
  
  preferences: {
    theme: "blue",
    //or choosing the theme only exist in the preferences
  },
};