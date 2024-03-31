import { Avatar, AvatarProps } from "@mui/material";
import React from "react";

interface AvatarComponentProps extends AvatarProps {
  children: React.ReactNode;
}

const AvatarComponent = ({ children, ...props }: AvatarComponentProps) => {
  return (
    <Avatar sx={{ width: 100, height: 100 }} {...props}>
      {children}
    </Avatar>
  );
};

export default AvatarComponent;
