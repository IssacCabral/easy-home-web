import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const contactRequestsForm = z.object({
  title: z.string().optional(),
  applicant: z.string().optional(),
  status: z.string().optional(),
});

export type ContactRequestsForm = z.infer<typeof contactRequestsForm>;

export type ContactRequestsFormReturn = UseFormReturn<
  {
    title?: string | undefined;
    applicant?: string | undefined;
    status?: string | undefined;
  },
  any,
  undefined
>;
