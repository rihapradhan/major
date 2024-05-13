import { z } from "zod";

export const schema = z.object({
  firstname: z
    .string()
    .nonempty({ message: "Please fill up all the first name!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  lastname: z
    .string()
    .nonempty({ message: "Please fill up last name fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  email: z
    .string()
    .email()
    .nonempty({ message: "Please fill up email fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>,?/~\\]/.test(data)),
  phone: z
    .string()
    .nonempty({ message: "Please fill up phone fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  password: z
    .string()
    .nonempty({ message: "Please fill up password fields!" })
    .refine((data) => !/[!%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  confirmpassword: z
    .string()
    .nonempty({ message: "Please fill up confirm password fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
});

export const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .nonempty({ message: "Please fill up all the fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>,?/~\\]/.test(data)),
  password: z
    .string()
    .nonempty({ message: "Please fill up all the fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
});

export const OrderSchema = z.object({
  firstname: z
    .string()
    .nonempty({ message: "Please fill up all the first name!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  lastname: z
    .string()
    .nonempty({ message: "Please fill up last name fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  email: z
    .string()
    .email()
    .nonempty({ message: "Please fill up email fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>,?/~\\]/.test(data)),
  phone: z
    .string()
    .nonempty({ message: "Please fill up phone fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  city: z
    .string()
    .nonempty({ message: "Please fill up city fields!" })
    .refine((data) => !/[!%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
  address: z
    .string()
    .nonempty({ message: "Please fill up address fields!" })
    .refine((data) => !/[!$%^&*()+{}\[\]:;<>?/~\\]/.test(data)),
});

export const formSChema = z.object({
  id: z.string().nonempty({ message: "Empty id" }),
  pin: z.string().nonempty({ message: "Empty pincode" }),
});
