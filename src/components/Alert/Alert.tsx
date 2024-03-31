import { Alert, AlertProps } from "@mui/material";
import React from "react";

interface AlertComponentProps extends AlertProps {
  message: React.ReactNode;
  severity?: "success" | "info" | "warning" | "error";
}

const AlertComponent = ({
  message,
  severity,
  ...props
}: AlertComponentProps) => {
  return (
    <Alert severity={severity} {...props}>
      {message}
    </Alert>
  );
};

export default AlertComponent;
