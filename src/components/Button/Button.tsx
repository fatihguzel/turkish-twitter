import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface ButtonComponentProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
