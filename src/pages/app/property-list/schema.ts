import { z } from "zod";

export const findPropertiesForm = z.object({
  location: z.string(),
  radiusInMeters: z
    .number()
    .min(50, "No Mínimo 50 metros")
    .max(2000, "No máximo 2 mil metros"),
  maxPrice: z
    .number()
    .min(0, {
      message: "Price must be at least 0.",
    })
    .max(100, {
      message: "Price must be at most 100.",
    }),
  minBedrooms: z.number(),
  maxBedrooms: z.number(),
});

export type FindPropertiesForm = z.infer<typeof findPropertiesForm>;

export const defaultValues: FindPropertiesForm = {
  location: "",
  radiusInMeters: 100,
  maxPrice: 400,
  minBedrooms: 1,
  maxBedrooms: 5,
};
