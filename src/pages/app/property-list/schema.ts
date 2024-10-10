import { z } from "zod";

export const findPropertiesForm = z.object({
  location: z.string(),
  radiusInMeters: z
    .number()
    .min(50, "No Mínimo 50 metros")
    .max(2000, "No máximo 2 mil metros"),
  maxPrice: z
    .number()
    .min(100, {
      message: "Price must be at least 100.",
    })
    .max(2000, {
      message: "Price must be at most 2000.",
    }),
  minBedrooms: z.number(),
  maxBedrooms: z.number(),
  propertyStatus: z.enum(["FREE", "BUSY", "SPLIT"]),
  propertyTypes: z.enum(["HOUSE", "DUPLEX", "APARTMENT"]),
  amenities: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Selecione pelo menos um item",
  }),
});

export type FindPropertiesForm = z.infer<typeof findPropertiesForm>;

export const defaultValues: FindPropertiesForm = {
  location: "",
  radiusInMeters: 100,
  maxPrice: 400,
  minBedrooms: 1,
  maxBedrooms: 5,
  propertyStatus: "FREE",
  propertyTypes: "HOUSE",
  amenities: ["recents", "home"],
};
