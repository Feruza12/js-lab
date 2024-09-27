import {
  OptionalUser,
  UserContactInfo,
  UserDetails,
} from "./user-details.interface";
import { User } from "./user.interface";

export class UserManager implements User {
  constructor(private users: UserDetails[]) {}

  updateUser(updatedUserDetails: OptionalUser, user: UserDetails): UserDetails {
    const userIndex = this.users.indexOf(user);
    if (!userIndex) {
      throw new Error("User not found!");
    }

    Object.assign(this.users[userIndex]!, updatedUserDetails);
    return this.users[userIndex]!;
  }

  displayContactInfo(user: UserContactInfo): string {
    return `User's name is: ${user.name} and email is ${user.email}`;
  }
}
