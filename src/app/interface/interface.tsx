export interface crendentialType {
  username: string;
  password: string;
}

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  setOpen: (open: boolean) => void;
  title: string;
  component: React.ReactElement;
}
