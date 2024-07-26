import { VscChromeClose } from "react-icons/vsc";
import ReactDOM from "react-dom";

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
      className="flex items-center justify-center fixed bg-black backdrop-blur-sm bg-opacity-40 w-full h-full left-0 top-0 z-50"
      onClick={(e) => handleClickOnBackdrop(toggleModal, e)}
    >
      <div
        className={`relative rounded-[30px] bg-bgFirstColor border border-borderColor shadow-lg sm-max:max-w-[300px] max-w-[330px] md:max-w-[700px] lg:max-w-[1180px] max-h-[95%] ${className}`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-5 right-4 md:top-7 md:right-7"
        >
          <VscChromeClose
            className="fill-textColor stroke-none focus:fill-accentColor lg:hover:fill-accentColor transition duration-300"
            size="28"
          />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
