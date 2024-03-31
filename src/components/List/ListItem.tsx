import { ListItem, ListItemProps } from "@mui/material";
import React from "react";

interface ListItemComponentProps extends ListItemProps {
  children: React.ReactNode;
}

const ListItemComponent = ({ children, ...props }: ListItemComponentProps) => {
  return (
    <ListItem
      sx={{
        padding: "0.5rem 0",
      }}
      {...props}
    >
      {children}
    </ListItem>
  );
};

export default ListItemComponent;
