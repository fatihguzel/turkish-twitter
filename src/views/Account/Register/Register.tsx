"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { Grid, Typography, Box, Container } from "@mui/material";
import TextFieldComponent from "@/components/TextField/TextField";
import PaperComponent from "@/components/Paper/Paper";
import ButtonComponent from "@/components/Button/Button";
import DividerComponent from "@/components/Divider/Divider";
import { RegisterSchema } from "@/schema/account/register/RegisterSchema";
import { AppDispatch } from "@/redux/store/store";
import { useDispatch } from "react-redux";
import { registerAction } from "@/redux/features/auth/asyncActions";
import { useRouter } from "next/navigation";
import SpinnerComponent from "@/components/Spinner/Spinner";

const RegisterView = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      setLoading(true);
      setDisabled(true);

      let data = values;
      dispatch(registerAction(data)).then((res) => {
        setLoading(false);
        setDisabled(false);
        if (res?.meta?.requestStatus === "fulfilled") {
          router.push("/account/login");
        }
      });
    },
  });

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            backgroundImage:
              "url('/assets/account/login/aerial-background-blog-cafe.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          lg={5}
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#f5f5f5",
            height: "100vh",
          }}
        >
          <Container
            sx={{
              height: "90vh",
            }}
          >
            <PaperComponent
              elevation={2}
              className="
                flex flex-col first-letter:capitalize
                justify-center items-center
                h-full w-full
                bg-slate-50 
                text-black dark:text-white
                rounded-2xl shadow-2xl shadow-gray-400
                sm:p-12 md:p-16 lg:p-20 xl:p-24
            "
            >
              <Typography
                variant="h5"
                gutterBottom
                className="
                text-3xl font-semibold
                mb-4
                text-black
                flex flex-col justify-center items-center


            "
              >
                <Link
                  href="/account/login"
                  className="text-blue-500 
                flex flex-row justify-center items-center
                rounded-full
                p-2
                hover:bg-blue-500 hover:text-white
                hover:border-transparent
                focus:ring-blue-500 focus:ring-offset-blue-200
                focus:outline-none focus:ring-2 focus:ring-offset-2
                transition ease-in-out duration-300
                "
                >
                  Turkish Twitter
                </Link>
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className="
                text-2xl font-semibold
                mb-4
                text-black 
            "
              >
                Kayıt Ol
              </Typography>
              <DividerComponent className="my-4" />
              <form onSubmit={formik.handleSubmit}>
                <TextFieldComponent
                  fullWidth
                  id="username"
                  name="username"
                  label="Kullanıcı Adı"
                  variant="outlined"
                  margin="normal"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />

                <TextFieldComponent
                  fullWidth
                  id="email"
                  name="email"
                  label="E-posta Adresi"
                  variant="outlined"
                  margin="normal"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextFieldComponent
                  fullWidth
                  id="password"
                  name="password"
                  label="Şifre"
                  variant="outlined"
                  margin="normal"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />

                <Box mt={2}>
                  <ButtonComponent
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={disabled}
                    type="submit"
                    className="
                    text-white
                    bg-blue-500
                    hover:bg-blue-600
                    focus:ring-blue-500
                    focus:ring-offset-blue-200
                    disabled:opacity-50
                  "
                  >
                    {loading ? (
                      <>
                        Kayıt Yapılıyor...
                        <SpinnerComponent
                          color="secondary"
                          size={20}
                          sx={{
                            marginLeft: "10px",
                            color: "#fff",
                          }}
                        />
                      </>
                    ) : (
                      "Kayıt Ol"
                    )}
                  </ButtonComponent>

                  <DividerComponent className="my-4" />
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      className="
                        text-right
                  "
                    >
                      <Link href="/account/login">
                        <ButtonComponent
                          color="primary"
                          variant="text"
                          className="
                          text-blue-500
                          hover:text-blue-600
                          focus:ring-blue-500
                          focus:ring-offset-blue-200
                          disabled:opacity-50
                          normal-case
                        "
                        >
                          Zaten Hesabın Var mı? Giriş Yap
                        </ButtonComponent>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </PaperComponent>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterView;
