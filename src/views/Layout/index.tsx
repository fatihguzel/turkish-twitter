"use client";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Spinner from "../Spinner";
import { getProfileAction } from "@/redux/features/auth/asyncActions";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();
  const isLogined = useSelector(
    (state: RootState) => state?.auth?.user?.isLogined
  );

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      setIsLoading(true);
    };
  }, [isLogined]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <main
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {isLogined && <Navbar />}
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {children}
      </div>
      {isLogined && <Footer />}
      <ToastContainer />
    </main>
  );
};

export default DefaultLayout;
