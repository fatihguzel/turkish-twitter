import { CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";

interface SpinnerProps extends CircularProgressProps {
  size?: number;
  thickness?: number;
  color?:
    | "primary"
    | "secondary"
    | "inherit"
    | "success"
    | "error"
    | "info"
    | "warning";
}

const SpinnerComponent = ({
  size,
  thickness,
  color,
  ...props
}: SpinnerProps) => {
  return (
    <CircularProgress
      size={size}
      thickness={thickness}
      color={color}
      {...props}
    />
  );
};

export default SpinnerComponent;
