import * as yup from "yup";

export const ChangePasswordSchema = yup.object({
  oldPassword: yup.string().required("Eski şifre zorunludur."),
  newPassword: yup.string().required("Yeni şifre zorunludur."),
  againPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Şifreler eşleşmiyor.")
    .required("Yeni şifre tekrarı zorunludur."),
});
