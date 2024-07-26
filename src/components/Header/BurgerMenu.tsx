import { useRef } from "react";
import { VscChromeClose } from "react-icons/vsc";

import { AuthButton, NavBar, UserBar } from "../../components";
import { useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";

interface IBurgerMenuProps {
  classBackdrop: string;
  classMenu: string;
  isOpen: boolean;
  userName: string;
  toggleMenu: () => void;
}

export const BurgerMenu = ({
  toggleMenu,
  classBackdrop,
  classMenu,
  isOpen,
  userName,
}: IBurgerMenuProps) => {
  const backdropRef = useRef(null);
  console.log(userName);
  useEscapeClose(isOpen, toggleMenu);

  return (
    <div
      onClick={(event) => handleClickOnBackdrop(toggleMenu, event)}
      ref={backdropRef}
      className={`${classBackdrop} fixed bg-black backdrop-blur-sm bg-opacity-40 w-full h-full left-0 top-0 z-50 lg:hidden`}
    >
      <div
        className={`${classMenu} relative flex flex-col justify-start items-center gap-[45px] bg-bgBodyColor px-[24px] py-[50px] w-[350px] sm-max:w-full md:w-[480px] ml-auto h-full transition duration-500`}
      >
        <button
          type="button"
          className="flex justify-center items-center absolute top-[24px] right-[24px] outline-none"
          onClick={toggleMenu}
        >
          <VscChromeClose
            className="fill-textColor stroke-none focus:fill-accentColor transition duration-300 md:size-[30px]"
            size="20"
          />
        </button>

        <NavBar
          className="flex flex-col gap-4 items-center w-full"
          toggleMenu={toggleMenu}
        />
        {!userName ? (
          <AuthButton
            toggleMenu={toggleMenu}
            className="flex flex-col justify-center items-center w-full gap-[10px] md:gap-[12px]"
            classLogIn="border border-secondTextColor bg-transparent rounded-[30px] px-[38px] py-[14px] w-[220px] md:w-[270px] font-medium text-[16px] text-textColor leading-[1.25] tracking-[-0.01em] second-btn-hover"
            classRegistration="bg-accentColor rounded-[30px] px-[40px] py-[14px] w-[220px] md:w-[270px] font-medium text-[16px] leading-[1.25] tracking-[-0.01em] text-bgFirstColor primary-btn-hover"
          />
        ) : (
          <UserBar className="flex" toggleMenu={toggleMenu} />
        )}
      </div>
    </div>
  );
};
