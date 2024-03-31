"use client";
import useCheckAuth from "@/hooks/useCheckAuth";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  useCheckAuth({
    rootType: "private",
  });
  const { t } = useTranslation();

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      h-screen
      text-black
    "
    >
      <div
        className="w-1/2 
      flex
      flex-col
      items-center
      justify-center
      space-y-4
      text-center
      h-full
      "
      >
        <h1 className="text-4xl font-bold">{t("HomePage.title")}</h1>

        <p className="text-xl">{t("HomePage.description")}</p>
      </div>
    </div>
  );
};

export default Home;
