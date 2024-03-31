import { Card, CardProps } from "@mui/material";
import React from "react";

interface CardComponentProps extends CardProps {
  children: React.ReactNode;
  title?: string;
}

const CardComponent = ({ title, children, ...props }: CardComponentProps) => {
  return (
    <Card title={title} {...props}>
      {children}
    </Card>
  );
};

export default CardComponent;
