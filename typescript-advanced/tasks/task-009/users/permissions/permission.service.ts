import { UserDetails } from "users/user-details.interface";
import { Permission } from "./permission.interface";
import { AdminPermissions, ViewerPermissions } from "./permission-details";

export class PermissionManager implements Permission {
  checkPermissions(
    user: UserDetails,
    permission: AdminPermissions & ViewerPermissions
  ): boolean {
    if (user.role == "viewer" && !["read", "access"].includes(permission)) {
      return false;
    }
    return true;
  }
}
