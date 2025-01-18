import * as z from "zod";

export const addPropertyDrawerFormSchema = z.object({
  title: z.string().min(8, { message: "Forneça uma descrição de pelo menos 8 caracteres." }),
  type: z.enum(["HOUSE", "DUPLEX", "APARTMENT"], { message: "Escolha uma tipo de imóvel." }),
  description: z.string().min(20, { message: "Forneça uma descrição de pelo menos 20 caracteres." }),
  price: z.number().min(100, { message: "O mínimo é 100." }).max(2000, { message: "O máximo é 2000." }),
  bedroomsAmount: z
    .number()
    .min(1, { message: "O imóvel deve ter pelo menos 1 quarto." })
    .max(10, { message: "O imóvel deve ter no máximo 10 quartos." }),
  bathroomsAmount: z
    .number()
    .min(1, { message: "O imóvel deve ter pelo menos 1 banheiro." })
    .max(10, { message: "O imóvel deve ter no máximo 10 banheiros." }),
  depth: z
    .number()
    .min(1, { message: "A profundidade deve ser no mínimo 1 metro." })
    .max(100, { message: "O imóvel deve ter no máximo 100 metros de fundo." }),
  width: z
    .number()
    .min(1, { message: "A largura deve ser no mínimo 1 metro." })
    .max(50, { message: "O imóvel deve ter no máximo 50 metros de fundo." }),
  // amenities: z.array(),
});

export type AddPropertyDrawerFormType = z.infer<typeof addPropertyDrawerFormSchema>;

export const defaultValues: AddPropertyDrawerFormType = {
  title: "",
  type: "HOUSE",
  description: "",
  price: 100,
  bedroomsAmount: 1,
  bathroomsAmount: 1,
  depth: 1,
  width: 1,
};
