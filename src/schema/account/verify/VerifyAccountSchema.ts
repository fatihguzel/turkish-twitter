import * as yup from "yup";

export const VerifyAccountSchema = yup.object({
  confirmCode: yup.string().required("Doğrulama kodu zorunludur."),
});
