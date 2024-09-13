// ERROR: blue is not assignable to theme, because it is not in the list of literal types

// --- FIX 1: adding "blue" to the list of literal types ---
interface UserProfile {
  id: string;

  preferences: {
    theme: "light" | "dark" | "blue";
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};

// --- FIX 2: assigning a valid value ---
// interface UserProfile {
//   id: string;

//   preferences: {
//     theme: "light" | "dark";
//   };
// }

// let user: UserProfile = {
//   id: "123",
//   preferences: {
//     theme: "dark",
//   },
// };
