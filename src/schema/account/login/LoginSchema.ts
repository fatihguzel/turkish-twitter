import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("E-posta adresi zorunludur."),
  password: yup.string().required("Şifre zorunludur."),
});
