import { IBaseModel } from "./base";

export interface IAddressEntity extends IBaseModel {
	addressNumber: number;
	street: string;
	lat: number;
	lon: number;
}