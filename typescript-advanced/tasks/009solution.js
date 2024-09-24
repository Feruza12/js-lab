var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var rolePermissions = {
    admin: ['read', 'write', 'edit', 'delete', 'access'],
    editor: ['read', 'write', 'edit', 'access'],
    viewer: ['read', 'access'],
};
// Functions
function updateUser(existingUser, updates) {
    return __assign(__assign({}, existingUser), updates);
}
function displayContactInfo(user) {
    return "Name: ".concat(user.name, ", Email: ").concat(user.email);
}
function checkPermissions(user, permission) {
    var permissions = rolePermissions[user.role];
    return permissions.indexOf(permission) !== -1;
}
// Example
var user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main St',
    phoneNumber: '555-1234',
    role: 'editor'
};
var updatedUser = updateUser(user, { email: 'john.new@example.com' });
console.log(displayContactInfo({ name: updatedUser.name, email: updatedUser.email }));
console.log(checkPermissions(updatedUser, 'write')); // Output: true
console.log(checkPermissions(updatedUser, 'delete')); // Output: false
