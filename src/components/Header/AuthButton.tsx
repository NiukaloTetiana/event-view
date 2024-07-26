import { useState } from "react";

import { AuthForm, Modal } from "../../components";
import { useModal } from "../../hooks";

interface IAuthButtonProps {
  className: string;
  classLogIn: string;
  classRegistration: string;
  handleUserSession?: (name: string) => void;
  toggleMenu?: () => void;
}

export const AuthButton = ({
  className,
  classLogIn,
  classRegistration,
  toggleMenu,
  handleUserSession,
}: IAuthButtonProps) => {
  const [isOpenModal, toggleModal] = useModal();
  const [registration, setRegistration] = useState(false);

  const handleClick = (value: boolean) => {
    setRegistration(value);
  };

  return (
    <>
      <ul className={className}>
        <li>
          <button
            type="button"
            onClick={() => {
              if (toggleMenu) toggleMenu();
              setRegistration(false);
              toggleModal();
            }}
            className={classLogIn}
          >
            Log In
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              if (toggleMenu) toggleMenu();
              setRegistration(true);
              toggleModal();
            }}
            className={classRegistration}
          >
            Registration
          </button>
        </li>
      </ul>
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="p-[37px] lg:p-[64px]"
        >
          <AuthForm
            handleUserSession={handleUserSession}
            toggleModal={toggleModal}
            registration={registration}
            onClick={handleClick}
          />
        </Modal>
      )}
    </>
  );
};
