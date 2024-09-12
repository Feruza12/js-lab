type UserRole = "admin" | "editor" | "viewer";

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
    phoneNumber: string;
    role: UserRole;
}

type OptionalUser = Partial<User>;
type RequiredUser = Required<User>;
type UserContactInfo = Pick<User, "name" | "email">;
type UserWithoutAddress = Omit<User, "address">;
type ReadonlyUser = Readonly<User>;

const userInfo: User = {
    id: 1,
    name: "John",
    email: "john@doe.com",
    age: 34,
    address: "123 Elm Street, Springfield, IL 62704, USA",
    phoneNumber: "(555) 123-4567",
    role: "editor"
}

function updateUser(partialObj: OptionalUser, existingUser: User): User {
    if (partialObj) {
        const updatedUser = { ...existingUser, ...partialObj };
        return updatedUser;
    } else {
        return existingUser;
    }
}

console.log(updateUser({ address: "456 Maple Avenue, Rivertown, CA 90210, USA" }, userInfo));
console.log(updateUser({ name: "Vention", age: 22 }, userInfo));


function displayContactInfo(userContact: UserContactInfo): string {
    return `User's name is ${userContact.name}, user's email: ${userContact.email}`
}

console.log(displayContactInfo({ name: "Vention", email: "vention@teams.com" }));



type RolePermissions = Record<UserRole, string[]>; //Couldn't name it as Permissions because it says TS standard library has same type

const rolePermissions: RolePermissions = {
    admin: ['read', 'write', 'edit', 'delete', 'access'],
    editor: ['read', 'write', 'edit', 'access'],
    viewer: ['read', 'access']
};

type PermissionTypes = "read" | "write" | "edit" | "delete" | "access";

function checkPermissions(user: User, permission: PermissionTypes): boolean {
    const userPermissions = rolePermissions[user.role];

    return userPermissions.includes(permission);
}

console.log(checkPermissions(userInfo, "edit"));