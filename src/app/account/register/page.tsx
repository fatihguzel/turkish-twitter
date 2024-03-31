"use client";
import RegisterView from "@/views/Account/Register/Register";
import React from "react";
import useCheckAuth from "@/hooks/useCheckAuth";

const RegisterPage = () => {
  useCheckAuth({
    rootType: "public",
  });

  return <RegisterView />;
};

export default RegisterPage;
