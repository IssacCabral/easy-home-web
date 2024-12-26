import { IAddressEntity } from "./address";
import { IAmenityEntity } from "./amenity";
import { IPropertyEntity } from "./property";

export type InputFindPropertiesOfInterestDto = { tenantId: string };

type Property = Omit<IPropertyEntity, "address" | "amenities"> & {
  address?: IAddressEntity;
  amenities?: IAmenityEntity[];
};

export enum PropertiesOfInterestStatus {
  IN_CONTACT = "IN_CONTACT",
  RENTED = "RENTED",
  FINISHED = "FINISHED",
  SELECTED = "SELECTED",
}

export type PropertiesOfInterest = {
  id: string;
  property: Property;
  type: "shared" | "individual";
  status: PropertiesOfInterestStatus;
  finalizationReason?: string;
  requestDate: Date;
};
