import { IBaseModel } from "./base";

export interface ITenantEntity extends IBaseModel {
  name: string;
  phone: string;
  email: string;
  password: string;
  profilePicUrl?: string;
  isMainTenant?: boolean;
}
