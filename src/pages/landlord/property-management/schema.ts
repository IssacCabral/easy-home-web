import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const propertyManagementForm = z.object({
  title: z.string().optional(),
  tenant: z.string().optional(),
  status: z.string().optional(),
});

export type PropertyManagementForm = z.infer<typeof propertyManagementForm>;

export type PropertyManagementFormReturn = UseFormReturn<PropertyManagementForm, any, undefined>;

export const defaultValues: PropertyManagementForm = {
  status: "all",
  tenant: "",
  title: "",
};
