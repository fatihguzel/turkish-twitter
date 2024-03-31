import { List, ListProps } from "@mui/material";
import React from "react";

interface ListComponentProps extends ListProps {
  children: React.ReactNode;
}

const ListComponent = ({ children, ...props }: ListComponentProps) => {
  return <List {...props}>{children}</List>;
};

export default ListComponent;
