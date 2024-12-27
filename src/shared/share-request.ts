import { IAddressEntity } from "./address";
import { IAmenityEntity } from "./amenity";
import { IPropertyEntity } from "./property";
import { ITenantEntity } from "./tenant";

export enum ShareRequestStatus {
  IN_CONTACT = "IN_CONTACT",
  SELECTED = "SELECTED",
  FINISHED = "FINISHED",
}

type Property = Omit<IPropertyEntity, "address" | "amenities"> & {
  address?: IAddressEntity;
  amenities?: IAmenityEntity[];
};

export interface IShareRequestEntity {
  id: string;
  tenant: ITenantEntity;
  property: Property;
  status: ShareRequestStatus;
  finalizationReason?: string;
  requestDate: Date;
}
