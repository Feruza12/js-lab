## Task: User Management System with TypeScript Utility Types

### Objective

Practice using TypeScript utility types (`Partial`, `Required`, `Pick`, `Omit`, `Readonly`) by creating a user management system.

### Problem Statement

You are tasked with creating a simple user management system. The system should manage user data with various operations such as updating user details, displaying specific user information, and ensuring certain fields are always present. To achieve this, you will use TypeScript utility types to enforce specific requirements on your data structures.

### Task Requirements

1. **User Interface**:

    - Create an interface `User` that includes the following properties:
        - `id`: a unique identifier.
        - `name`: the user's name.
        - `email`: the user's email.
        - `age`: the user's age.
        - `address`: the user's address .
        - `phoneNumber`: the user's phone number.
        - `role`: the user's role. (`admin`, `editor`, `viewer`)

2. **Utility Type Tasks**:

    - **Make Optional**:
        - Create a type `OptionalUser` that makes all properties of the `User` interface optional.
    - **Make Required**:
        - Create a type `RequiredUser` that makes all properties of the `User` interface required.
    - **Pick Specific Properties**:
        - Create a type `UserContactInfo` that only includes the `name` and `email` properties from the `User` interface.
    - **Omit Specific Properties**:
        - Create a type `UserWithoutAddress` that includes all properties of the `User` interface except `address`.
    - **Readonly Properties**:
        - Create a type `ReadonlyUser` that makes all properties of the `User` interface read-only.

3. **Functions**:

    - **Update User**:
        - Create a function `updateUser` that takes an object of type `Partial<User>` and an existing `User`, and returns an updated `User`.
    - **Display User Contact Info**:
        - Create a function `displayContactInfo` that takes a `UserContactInfo` and returns a formatted string with the user's name and email.

4. **User Roles**:

    - Define a union type `UserRole` with the following possible roles:
        - `"admin"`
        - `"editor"`
        - `"viewer"`

5. **Permissions Based on Role**:

    - Create a type `Permissions` that maps each `UserRole` to the specific permissions they have. Permissions include:
        - `"read"`
        - `"write"`
        - `"edit"`
        - `"delete"`
        - `"access"`
    - Example:
        - An `"admin"` has `"read"`, `"write"`, `"edit"`, `"delete"`, and `"access"` permissions.
        - A `"viewer"` only has `"read"` and `"access"` permissions.

6. **Enforcing Permissions**:
    - Create a function `checkPermissions` that accepts a `User` and a permission (e.g., `"edit"`) and returns `true` if the user has that permission, and `false` otherwise.
