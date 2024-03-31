import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import IconComponent from "../Icon/Icon";
import ButtonComponent from "../Button/Button";

interface DialogComponentProps extends DialogProps {
  children: React.ReactNode;
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: string;
  footerButtons?: React.ReactNode;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const DialogComponent = ({
  title,
  open,
  setOpen,
  icon,
  footerButtons,
  children,
  ...props
}: DialogComponentProps) => {
  return (
    <BootstrapDialog
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
      {...props}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => setOpen(false)}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconComponent
          icon={icon ? icon : "material-symbols:close"}
          fontSize={"2rem"}
        />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {footerButtons ? (
          footerButtons
        ) : (
          <ButtonComponent
            onClick={() => setOpen(false)}
            variant="outlined"
            color="error"
          >
            Kapat
          </ButtonComponent>
        )}
      </DialogActions>
    </BootstrapDialog>
  );
};

export default DialogComponent;
