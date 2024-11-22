interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    address: string;
    phoneNumber: string;
    role: UserRole;
}

//Types
type OptionalUser = Partial<User>;
type RequiredUser = Required<User>;
type UserContactInfo = Pick<User, 'name' | 'email'>;
type UserWithoutAddress = Omit<User, 'address'>;
type ReadonlyUser = Readonly<User>;

//Roles
type UserRole = 'admin' | 'editor' | 'viewer';

//Permissions
type Permission = 'read' | 'write' | 'edit' | 'delete' | 'access';
type PermissionsMap = {
    admin: Permission[];
    editor: Permission[];
    viewer: Permission[];
};
type RolePermissions = {
    [K in UserRole]: PermissionsMap[K];
};

const rolePermissions: RolePermissions = {
    admin: ['read', 'write', 'edit', 'delete', 'access'],
    editor: ['read', 'write', 'edit', 'access'],
    viewer: ['read', 'access'],
};

// Functions
function updateUser(existingUser: User, updates: Partial<User>): User {
    return { ...existingUser, ...updates };
}

function displayContactInfo(user: UserContactInfo): string {
    return `Name: ${user.name}, Email: ${user.email}`;
}

function checkPermissions(user: User, permission: Permission): boolean {
    const permissions = rolePermissions[user.role];
    return permissions.indexOf(permission) !== -1;
}

// Example
const user: User = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main St',
    phoneNumber: '555-1234',
    role: 'editor'
};

const updatedUser = updateUser(user, { email: 'john.new@example.com' });
console.log(displayContactInfo({ name: updatedUser.name, email: updatedUser.email }));
console.log(checkPermissions(updatedUser, 'write'));
console.log(checkPermissions(updatedUser, 'delete'));