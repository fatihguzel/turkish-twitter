"use client";
import LoginView from "@/views/Account/Login/Login";
import React from "react";
import useCheckAuth from "@/hooks/useCheckAuth";

const LoginPage = () => {
  useCheckAuth({
    rootType: "public",
  });
  return <LoginView />;
};

export default LoginPage;
