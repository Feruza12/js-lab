// First solution: write only an assignable type "light" or "dark"
interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark";
  };
}

let user1: UserProfile = {
  id: "123",
  preferences: {
    theme: "dark",
  },
};


// If we need more flexibility and add more themes:
// Second solution: we can add "blue" type to preferences object
interface UserProfile2 {
  id: string;

  preferences: {
    theme: "light" | "dark" | "blue";
  };
}

let user2: UserProfile2 = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};


// Third solution: we can use Generics and pass the needed type
interface UserProfile3<T> {
  id: string;

  preferences: {
    theme: T;
  };
}

let user3: UserProfile3<"blue"> = { // or instead <"blue"> we can use <string>
  id: "123",
  preferences: {
    theme: "blue",
  },
};


// Fourth solution: we can create Enum and list all necessary themes, then we can call it in the right place
enum Themes {
  Light = "light",
  Dark = "dark",
  Blue = "blue"
}

interface UserProfile4 {
  id: string;

  preferences: {
    theme: Themes;
  };
}

let user4: UserProfile4 = {
  id: "123",
  preferences: {
    theme: Themes.Blue,
  },
};