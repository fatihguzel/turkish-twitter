import { Paper, PaperProps } from "@mui/material";
import React from "react";

interface PaperComponentProps extends PaperProps {
  children: React.ReactNode;
}

const PaperComponent = ({ children, ...props }: PaperComponentProps) => {
  return <Paper {...props}>{children}</Paper>;
};

export default PaperComponent;
