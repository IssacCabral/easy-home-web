import { IBaseModel } from "./base";

export interface ILandlordEntity extends IBaseModel {
  name: string;
  phone: string;
  email: string;
  password: string;
  profilePicUrl?: string;
}
