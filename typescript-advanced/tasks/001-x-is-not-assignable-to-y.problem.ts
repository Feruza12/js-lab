// workaround #1: add another literal type to `theme`
interface UserProfile1 {
    id: string;

    preferences: {
        theme: "light" | "dark" | "blue";
    };
}

let user1: UserProfile1 = {
    id: "123",
    preferences: {
        theme: "blue"
    }
};

// workaround #2: use any string and validiate it
interface UserProfile2 {
    id: string;

    preferences: {
        theme: string;
    };
}

function validateTheme(theme: string) {
    // some validation with fallback values
    return theme;
}

let user2: UserProfile2 = {
    id: "123",
    preferences: {
        theme: validateTheme("light")
    }
};

// workaround #3: use an enum to avoid accidentally setting the wrong theme
enum UserTheme {
    light = "light",
    dark = "dark"
}

interface UserProfile3 {
    id: string;

    preferences: {
        theme: UserTheme;
    };
}

let user3: UserProfile3 = {
    id: "123",
    preferences: {
        theme: UserTheme.dark
    }
};
