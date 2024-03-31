"use client";
import useCheckAuth from "@/hooks/useCheckAuth";
import ProfileView from "@/views/Modules/Profile";
import React from "react";

const ProfilePage = () => {
  useCheckAuth({
    rootType: "private",
  });

  return <ProfileView />;
};

export default ProfilePage;
