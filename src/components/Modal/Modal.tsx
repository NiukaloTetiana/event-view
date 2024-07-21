import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";

interface ModalProps {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
  toggleModal: () => void;
}

const modalRoot = document.querySelector("#modalRoot")!;

export const Modal = ({
  isOpen,
  className,
  children,
  toggleModal,
}: ModalProps) => {
  useEscapeClose(isOpen, toggleModal);

  return ReactDOM.createPortal(
    <div
      className="flex items-center justify-center fixed bg-[#191a1599] w-full h-full left-0 top-0 z-50"
      onClick={(e) => handleClickOnBackdrop(toggleModal, e)}
    >
      <div
        className={`relative rounded-[30px] bg-firstGradColor sm-max:max-w-[300px] max-w-[330px] md:max-w-[700px] lg:max-w-[1180px] max-h-[95%] ${className}`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-5 right-4 md:top-7 md:right-7"
        >
          <AiOutlineCloseCircle className="stroke-textColor" size={28} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
