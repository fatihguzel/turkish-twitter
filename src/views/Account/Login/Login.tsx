"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { Grid, Typography, Box, Container } from "@mui/material";
import { LoginSchema } from "@/schema/account/login/LoginSchema";
import TextFieldComponent from "@/components/TextField/TextField";
import PaperComponent from "@/components/Paper/Paper";
import ButtonComponent from "@/components/Button/Button";
import DividerComponent from "@/components/Divider/Divider";
import IconComponent from "@/components/Icon/Icon";
import { useDispatch } from "react-redux";
import { loginAction } from "@/redux/features/auth/asyncActions";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store/store";
import SpinnerComponent from "@/components/Spinner/Spinner";

const LoginView = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setLoading(true);
      setDisabled(true);
      const data = values;
      dispatch(loginAction(data)).then((res: any) => {
        setLoading(false);
        setDisabled(false);
        if (res?.payload?.success) {
          router.push("/profile");
        }
      });
    },
  });

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={0}
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
                Giriş Yap
              </Typography>
              <DividerComponent className="my-4" />
              <form onSubmit={formik.handleSubmit}>
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
                    disabled={disabled}
                    color="primary"
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
                        Giriş Yapılıyor
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
                      "Giriş Yap"
                    )}
                  </ButtonComponent>

                  <DividerComponent className="my-4" />
                  <Grid container>
                    <Grid item xs={6}>
                      <Link href="/account/forgot-password">
                        <ButtonComponent
                          color="primary"
                          variant="text"
                          className="
                        text-blue-500
                        hover:text-blue-600
                        focus:ring-blue-500
                        focus:ring-offset-blue-200
                        disabled:opacity-50
                      "
                        >
                          Şifremi Unuttum
                        </ButtonComponent>
                      </Link>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      className="
                        text-right
                  "
                    >
                      <Link href="/account/register">
                        <ButtonComponent
                          color="primary"
                          variant="text"
                          className="
                          text-blue-500
                          hover:text-blue-600
                          focus:ring-blue-500
                          focus:ring-offset-blue-200
                          disabled:opacity-50
                        "
                        >
                          Kayıt Ol
                        </ButtonComponent>
                      </Link>
                    </Grid>

                    <Grid item xs={12}>
                      <DividerComponent className="my-4" />
                    </Grid>

                    <Grid
                      container
                      spacing={2}
                      className="
                        text-center
                        justify-center
                        items-center
                    "
                    >
                      <Grid
                        item
                        xs={12}
                        md={6}
                        className="
                        text-center
                        flex flex-col
                        justify-center
                        items-center
                    "
                      >
                        <ButtonComponent
                          fullWidth
                          variant="contained"
                          color="primary"
                          className="
                                    text-white
                                    bg-blue-500
                                    hover:bg-blue-600
                                    focus:ring-blue-500
                                    focus:ring-offset-blue-200
                                    disabled:opacity-50
                                    normal-case
                                    flex flex-row
                                    justify-center
                                    items-center
                            "
                        >
                          <IconComponent
                            icon="akar-icons:google-fill"
                            className="text-3xl"
                            color="#fff"
                          />
                          <span className="ml-2">Google </span>
                        </ButtonComponent>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={6}
                        className="
                            text-center
                            flex flex-col
                            justify-center
                            items-center
                        "
                      >
                        <ButtonComponent
                          fullWidth
                          variant="contained"
                          color="primary"
                          className="
                                    text-white
                                    bg-blue-500
                                    hover:bg-blue-600
                                    focus:ring-blue-500
                                    focus:ring-offset-blue-200
                                    disabled:opacity-50
                                    normal-case
                                    flex flex-row
                                    justify-center
                                    items-center
                                    "
                        >
                          <IconComponent
                            icon="akar-icons:facebook-fill"
                            className="text-3xl"
                            color="#fff"
                          />
                          <span className="ml-2">Facebook </span>
                        </ButtonComponent>
                      </Grid>
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

export default LoginView;
