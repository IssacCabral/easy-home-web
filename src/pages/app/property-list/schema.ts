import { z } from "zod";

export const findPropertiesForm = z
  .object({
    location: z
      .string()
      .min(3, "Forneça pelo menos 3 caracteres para pesquisar"),
    radiusInMeters: z
      .union([z.string(), z.number()]) // Aceita string ou número
      .transform((val) => Number(val)) // Converte para número
      .refine((val) => val >= 50 && val <= 2000, {
        message: "O valor deve ser entre 50 e 2000 metros",
      }),
    maxPrice: z
      .number()
      .min(100, {
        message: "Price must be at least 100.",
      })
      .max(2000, {
        message: "Price must be at most 2000.",
      }),
    minBedrooms: z
      .union([z.string(), z.number()])
      .transform((val) => Number(val)),
    maxBedrooms: z
      .union([z.string(), z.number()])
      .transform((val) => Number(val)),
    propertyStatus: z.enum(["FREE", "BUSY", "SPLIT"]),
    propertyTypes: z.enum(["HOUSE", "DUPLEX", "APARTMENT"]),
    amenities: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "Selecione pelo menos um item",
      }),
  })
  .refine((data) => data.minBedrooms < data.maxBedrooms, {
    message: "O mínimo deve ser menor que o máximo",
    path: ["minBedrooms"],
  })
  .refine((data) => data.maxBedrooms > data.minBedrooms, {
    message: "O máximo deve ser maior que o mínimo",
    path: ["maxBedrooms"],
  });

export type FindPropertiesForm = z.infer<typeof findPropertiesForm>;

export const defaultValues: FindPropertiesForm = {
  location: "",
  radiusInMeters: 50,
  maxPrice: 400,
  minBedrooms: 1,
  maxBedrooms: 5,
  propertyStatus: "FREE",
  propertyTypes: "HOUSE",
  amenities: ["TV", "Wifi"],
};