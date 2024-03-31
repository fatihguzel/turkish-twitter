"use client";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import DefaultLayout from "@/views/Layout";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "@/config/i18n";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeConfig } from "@/config/theme";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme(themeConfig);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Provider store={store}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Turkish Twitter is a Twitter clone for Turkish people."
        />
        <meta
          name="keywords"
          content="twitter, turkish, clone, turkish twitter, twitter clone"
        />
        <meta name="author" content="Turkish Twitter" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1da1f2" />
        <meta name="msapplication-navbutton-color" content="#1da1f2" />
        <title>Turkish Twitter</title>
        <link rel="canonical" href="https://turkish-twitter.vercel.app/" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en">
          <body className={inter.className}>
            <I18nextProvider i18n={i18n}>
              <DefaultLayout>{children}</DefaultLayout>
            </I18nextProvider>
          </body>
        </html>
      </Provider>
    </ThemeProvider>
  );
}
