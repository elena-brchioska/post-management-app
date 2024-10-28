import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import StyledModal from "./styled/CustomModal.styled";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const CustomModal = forwardRef<ModalHandle, ModalProps>(({ children, onClose }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  return createPortal(
    <StyledModal ref={dialog} onClose={onClose}>
      {children}

    </StyledModal>,
    document.getElementById("modal-root")!
  );
});

export default CustomModal;