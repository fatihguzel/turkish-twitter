import * as yup from "yup";

export const RegisterSchema = yup.object({
  username: yup.string().required("Kullanıcı adı zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("E-posta adresi zorunludur."),
  password: yup.string().required("Şifre zorunludur."),
});
