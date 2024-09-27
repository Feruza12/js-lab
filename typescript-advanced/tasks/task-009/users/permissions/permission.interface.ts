import { UserDetails } from "users/user-details.interface";
import { AdminPermissions, ViewerPermissions } from "./permission-details";

export interface Permission {
  checkPermissions(
    user: UserDetails,
    permission: AdminPermissions & ViewerPermissions
  ): boolean;
}
