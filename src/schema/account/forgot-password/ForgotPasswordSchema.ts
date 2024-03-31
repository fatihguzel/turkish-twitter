import * as yup from "yup";

export const ForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("E-posta adresi zorunludur."),
});
