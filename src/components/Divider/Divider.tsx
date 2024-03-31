import React from "react";
import { Divider, DividerProps } from "@mui/material";

const DividerComponent = ({ ...props }: DividerProps) => {
  return <Divider {...props} />;
};

export default DividerComponent;
