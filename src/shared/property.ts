import { IAddressEntity } from "./address";
import { IAmenityEntity } from "./amenity";
import { IBaseModel } from "./base";

export enum PropertyTypes {
	HOUSE = "HOUSE",
	DUPLEX = "DUPLEX",
	APARTMENT = "APARTMENT",
}

export enum PropertyStatus {
	FREE = "FREE",
	BUSY = "BUSY",
	SPLIT = "SPLIT",
}

export interface IPropertyEntity extends IBaseModel {
	landlordId: string;
	title: string;
	type: PropertyTypes;
	status: PropertyStatus;
	address: IAddressEntity;
	price: number;
	bedrooms: number;
	bathrooms: number;
	description: string;
	width: number;
	depth: number;
	photosUrl: string;
	amenities: IAmenityEntity[];
}