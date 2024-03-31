import AlertComponent from "@/components/Alert/Alert";
import ButtonComponent from "@/components/Button/Button";
import SpinnerComponent from "@/components/Spinner/Spinner";
import TextFieldComponent from "@/components/TextField/TextField";
import { changePasswordAction } from "@/redux/features/auth/asyncActions";
import { AppDispatch, RootState } from "@/redux/store/store";
import { ChangePasswordSchema } from "@/schema/profile/change-password/ChangePasswordSchema";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ChangePasswordModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePasswordModal = ({ setOpen }: ChangePasswordModalProps) => {
  const [apiMessage, setApiMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state?.auth?.user);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      againPassword: "",
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: (values) => {
      setLoading(true);

      let data = {
        ...values,
        email: user?.email,
      };
      dispatch(changePasswordAction(data)).then((res) => {
        if (res?.meta?.requestStatus === "fulfilled") {
          setApiMessage("Şifre Değiştirildi.");
          setIsSuccess(true);
          setLoading(false);
          setOpen(false);
        } else {
          setApiMessage("Şifre Değiştirilemedi.");
          setIsSuccess(false);
          setLoading(false);
        }
      });
    },
  });

  const { errors, isValid } = formik;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {formik.errors.oldPassword && (
            <AlertComponent
              message={formik.errors.oldPassword}
              severity="error"
            />
          )}
          {formik.errors.newPassword && (
            <AlertComponent
              message={formik.errors.newPassword}
              severity="error"
            />
          )}
          {formik.errors.againPassword && (
            <AlertComponent
              message={formik.errors.againPassword}
              severity="error"
            />
          )}

          {/* Success */}
          {formik.errors.oldPassword === undefined &&
            formik.errors.newPassword === undefined &&
            formik.errors.againPassword === undefined &&
            formik.values.oldPassword !== "" &&
            formik.values.newPassword !== "" &&
            formik.values.againPassword !== "" &&
            apiMessage === "" && (
              <AlertComponent
                message="Şifre Değiştirilebilir."
                severity="success"
              />
            )}

          {/* Error */}
          {apiMessage !== "" && isSuccess !== true && (
            <AlertComponent message={apiMessage} severity="error" />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* Visibility password icon */}

          <TextFieldComponent
            label="Eski Şifre"
            name="oldPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!errors.oldPassword}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextFieldComponent
            label="Yeni Şifre"
            name="newPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!errors.newPassword}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextFieldComponent
            label="Yeni Şifre Tekrar"
            name="againPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!errors.againPassword}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ButtonComponent
            type="submit"
            fullWidth
            disabled={!isValid}
            variant="contained"
            color="primary"
            size="large"
            className="mt-2
                bg-blue-500
                hover:bg-blue-600
                text-white
                hover:drop-shadow-lg
                transition
                duration-500
            "
          >
            {loading ? (
              <>
                Şifre Değiştiriliyor...
                <SpinnerComponent
                  color="secondary"
                  size={15}
                  sx={{
                    marginLeft: "10px",
                    color: "#fff",
                  }}
                />
              </>
            ) : (
              "Şifre Değiştir"
            )}
          </ButtonComponent>
        </Grid>
      </Grid>
    </form>
  );
};

export default ChangePasswordModal;
