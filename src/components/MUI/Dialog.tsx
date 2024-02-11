import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { Divider } from "@mui/material";
import Form from "../Form";

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: string;
  open: boolean;
  onClose: (value?: string) => void;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      {/* FORM 🔴*/}
      <Form onClose={onClose} />

      <DialogActions
        sx={{
          backgroundColor: "red",
          width: "fit-content",
          padding: 0,
          position: "absolute",
          right: 50,
          bottom: 16,
          overflow: "hidden",
        }}
      >
        <Button
          autoFocus
          onClick={handleCancel}
          variant="contained"
          sx={{
            backgroundColor: "red",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "red",
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Dialogg() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Dione");

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue?: string) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  
  return (
    <>
      <ListItemButton
        style={{
          width: "fit-content",
          padding: 0,
          borderRadius: "10px",
          position: "absolute",
          left: 20,
        }}
        aria-haspopup="true"
        aria-controls="ringtone-menu"
        aria-label="phone ringtone"
        onClick={handleClickListItem}
      >
        <AddBoxRoundedIcon sx={{ fontSize: "3vw", color: "white" }} />
      </ListItemButton>

      <ConfirmationDialogRaw
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
    </>
  );
}
