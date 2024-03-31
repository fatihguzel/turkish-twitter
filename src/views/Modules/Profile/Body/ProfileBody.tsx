import React from "react";
import Posts from "./components/Posts";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { IUserBlogs } from "@/dtos/blogs/blogs";

const ProfileBody = () => {
  const { user_blogs } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-5
        md:grid-cols-2
        lg:grid-cols-3
        items-center
        justify-center
        mt-5
        mx-auto
        p-10
        rounded-md
      "
    >
      {user_blogs?.map((user_blogs: IUserBlogs) => (
        <Posts key={user_blogs._id} user_blogs={user_blogs} />
      ))}
    </div>
  );
};

export default ProfileBody;
