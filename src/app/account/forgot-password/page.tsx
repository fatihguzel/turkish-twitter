"use client";
import ForgotPasswordView from "@/views/Account/ForgotPassword/ForgotPassword";
import React from "react";

import useCheckAuth from "@/hooks/useCheckAuth";

const ForgotPasswordPage = () => {
  useCheckAuth({
    rootType: "public",
  });
  return <ForgotPasswordView />;
};

export default ForgotPasswordPage;
