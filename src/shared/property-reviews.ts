import { IAddressEntity } from "./address";
import { IAmenityEntity } from "./amenity";
import { IBaseModel } from "./base";
import { IPropertyEntity } from "./property";
import { ITenantEntity } from "./tenant";

export type Rating = 1 | 2 | 3 | 4 | 5;

type Property = Omit<IPropertyEntity, "address" | "amenities"> & {
  address?: IAddressEntity;
  amenities?: IAmenityEntity[];
};

export interface IPropertyReviewEntity extends IBaseModel {
  property: Property;
  tenant: ITenantEntity;
  rating: Rating;
  comment: string;
}
