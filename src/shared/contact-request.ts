import { IAddressEntity } from "./address";
import { IAmenityEntity } from "./amenity";
import { IPropertyEntity } from "./property";
import { ITenantEntity } from "./tenant";

export enum ContactRequestStatus {
  IN_CONTACT = "IN_CONTACT",
  RENTED = "RENTED",
  FINISHED = "FINISHED",
}

type Property = Omit<IPropertyEntity, "address" | "amenities"> & {
  address?: IAddressEntity;
  amenities?: IAmenityEntity[];
};

export interface IContactRequestEntity {
  id: string;
  tenant: ITenantEntity;
  property: Property;
  status: ContactRequestStatus;
  finalizationReason?: string;
  requestDate: Date;
}
