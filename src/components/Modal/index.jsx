import { useState } from "react";
import Modal from "react-modal";

import Button from "../Button";

import { ReactComponent as Closer } from "../../assets/closer.svg";

import { ModalHeaderStyled, ModalBodyStyled, HeaderTitleStyled } from "./styles";

Modal.setAppElement("#root");

const reactModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(16, 17, 29, 0.3)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "",
    bottom: "",
    transform: "translate(-50%, -50%)",
    width: "900px",
    maxWidth: "100%",
    border: "none",
    background: "var(--white)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "0",
  },
};

export const ReactModal = (props) => {
  const { header, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button variant='blue' alignment='toRight' onClick={openModal}>
        Show additional info
      </Button>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={reactModalStyles}>
        <ModalHeaderStyled>
          <HeaderTitleStyled>{header}</HeaderTitleStyled>

          <Button
            onClick={closeModal}
          >
            <Closer />
          </Button>
        </ModalHeaderStyled>

        <ModalBodyStyled>{children}</ModalBodyStyled>
      </Modal>
    </div>
  );
};

export default ReactModal;
