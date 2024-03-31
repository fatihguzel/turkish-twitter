import React from "react";
import PaperComponent from "@/components/Paper/Paper";
import DividerComponent from "@/components/Divider/Divider";
import IconComponent from "@/components/Icon/Icon";
import Image from "next/image";
import AlertComponent from "@/components/Alert/Alert";
import { IUserBlogs } from "@/dtos/blogs/blogs";

interface Props {
  user_blogs: IUserBlogs;
}

const Posts = ({ user_blogs }: Props) => {
  return (
    <div
      className="
            w-full
            mx-auto
            shadow-lg
            rounded-md
            text-gray-800
            "
    >
      <PaperComponent className="w-full">
        <Image
          src={
            user_blogs.image
              ? user_blogs.image
              : "/assets/profile/blogs/yazidan-karakter-analizi.webp"
          }
          alt="blog"
          width={500}
          height={500}
          objectFit="cover"
        />
      </PaperComponent>

      <div className="flex flex-col justify-between items-center">
        <PaperComponent className="w-full p-5">
          <p className="text-2xl font-semibold">{user_blogs.title}</p>
          <DividerComponent className="my-5" />
          <p className="text-lg">{user_blogs.text}</p>
        </PaperComponent>

        {/* Like Dislike Comment Buttons */}

        <PaperComponent
          className="w-full p-5 flex flex-col xl:flex-row gap-5 justify-between items-center
      "
        >
          <div className="flex justify-start items-center w-full">
            <AlertComponent
              title="Like"
              className="text-green-500 w-full"
              severity="success"
              message={
                <div
                  className="
                flex
                flex-row
                w-full
                "
                >
                  <IconComponent
                    className="mr-5"
                    icon="mdi-like"
                    fontSize={"1.25rem"}
                    color="green"
                  />
                  {user_blogs.likes.length}
                </div>
              }
            />
          </div>

          <div className="flex justify-start items-center w-full">
            <AlertComponent
              title="Dislike"
              className="text-red-500 w-full"
              severity="error"
              message={
                <div
                  className="
                flex
                flex-row
                w-full
                "
                >
                  <IconComponent
                    className="mr-5"
                    icon="mdi-dislike"
                    fontSize={"1.25rem"}
                    color="red"
                  />
                </div>
              }
            />
          </div>

          <div className="flex justify-start items-center w-full">
            <AlertComponent
              className="text-blue-500 w-full"
              severity="info"
              title="Comment"
              message={
                <div
                  className="
                flex
                flex-row
                w-full
                "
                >
                  <IconComponent
                    className="mr-5"
                    icon="mdi-comment"
                    fontSize={"1.25rem"}
                    color="blue"
                  />
                  {user_blogs.comments.length}
                </div>
              }
            />
          </div>
        </PaperComponent>
      </div>
    </div>
  );
};

export default Posts;
