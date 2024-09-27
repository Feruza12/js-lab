import {
  OptionalUser,
  UserContactInfo,
  UserDetails,
} from "./user-details.interface";

export interface User {
  updateUser(updatedUserDetails: OptionalUser, user: UserDetails): UserDetails;
  displayContactInfo(user: UserContactInfo): string;
}
