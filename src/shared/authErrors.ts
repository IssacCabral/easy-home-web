import { IError } from "./iError";

export enum AuthErrors {
  HEADER_NOT_PROVIDED = "AUTH-001",
  TOKEN_NOT_PROVIDED = "AUTH-002",
  EXPIRED_TOKEN = "JWT-002",
  GENERAL_ERROR = "AUTH-003",
}

export const ForbiddenError: IError = {
  code: "AUTH-004",
  message: "Without Permission To Access The Resource",
  shortMessage: "forbiddenError",
};
