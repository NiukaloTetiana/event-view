import { LogOut, Modal } from "../../components";
import { useModal } from "../../hooks";

interface IUserBarProps {
  className?: string;
  toggleMenu: () => void;
  handleUserSession?: (name: string) => void;
}

export const UserBar = ({
  className,
  toggleMenu,
  handleUserSession,
}: IUserBarProps) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div
      className={`${className} flex-wrap lg:flex-nowrap justify-center items-center gap-[24px]`}
    >
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          toggleModal={toggleModal}
          className="p-[44px] md:p-[64px]"
        >
          <LogOut
            toggleLogOutModal={toggleModal}
            handleUserSession={handleUserSession}
          />
        </Modal>
      )}
      <button
        onClick={() => {
          toggleMenu && toggleMenu();
          toggleModal();
        }}
        type="button"
        className="bg-accentColor rounded-[30px] px-[40px] py-[14px] w-[220px] md:w-[270px] lg:w-[168px] font-medium text-[16px] leading-[1.25] tracking-[-0.01em] text-bgFirstColor primary-btn-hover"
      >
        Log out
      </button>
    </div>
  );
};
