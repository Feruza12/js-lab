type UserRole = "admin" | "editor" | "viewer";
type Permission = "read" | "write" | "edit" | "delete" | "access";
type OptionalUser = Partial<User>;
type RequiredUser = Required<User>;
type UserContactInfo = Pick<User, "name" | "email">;
type UserWithoutAddress = Omit<User, "address">;
type ReadonlyUser = Readonly<User>;

interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    address?: {
        street: string;
        house: number;
    };
    phoneNumber?: string;
    role: UserRole;
}

const userPemissions: Record<UserRole, Permission[]> = {
    admin: ["read", "write", "edit", "delete", "access"],
    editor: ["read", "write", "edit"],
    viewer: ["read"]
};

function updateUser(optionalUser: OptionalUser, user: User) {
    for (const key of Object.keys(optionalUser)) {
        if (optionalUser[key]) {
            user[key] = optionalUser[key];
        }
    }

    return user;
}

function displayContactInfo(contactInfo: UserContactInfo) {
    return `Name: ${contactInfo.name} \n
            Email: ${contactInfo.email}`;
}

function checkPermissions(user: User, permission: Permission) {
    return userPemissions[user.role].includes(permission);
}
