import CardComponent from "@/components/Card/Card";
import React, { useEffect } from "react";
import ProfileHeader from "./Header/ProfileHeader";
import { Container } from "@mui/material";
import ProfileBody from "./Body/ProfileBody";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { getUserBlogsAction } from "@/redux/features/auth/asyncActions";

const ProfileView = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getUserBlogsAction(user?.email));
  }, [dispatch, user, user?.email]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "2.5rem",
      }}
    >
      <CardComponent
        className="
            w-full
            min-h-screen
            mx-auto
            shadow-lg
            rounded-md
            text-gray-800
            "
      >
        <CardComponent
          className="
            w-full
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
      "
        >
          <ProfileHeader />
        </CardComponent>

        <CardComponent
          className="
            w-full
            mt-5
            mx-auto
            shadow-lg
            rounded-md
            text-gray-800
      "
        >
          <ProfileBody />
        </CardComponent>
      </CardComponent>
    </Container>
  );
};

export default ProfileView;
