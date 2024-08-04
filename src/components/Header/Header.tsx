import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

import {
  AuthButton,
  BurgerMenu,
  NavBar,
  ThemeToggle,
  UserBar,
} from "../../components";
import { useLocalStorage, useModal } from "../../hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useModal();
  const [userName, setUserName] = useState("");
  const [userLogout, setUserLogout] = useState<boolean>(true);

  const [user] = useLocalStorage("user", null);

  const handleUserSession = (name: string, user: boolean) => {
    setUserName(name);

    setUserLogout(user);
  };

  return (
    <header className="border-b border-b-borderColor shadow-sm py-6 relative">
      <div className="container flex justify-between items-center">
        <NavBar
          userName={userName}
          userLogout={userLogout}
          className="hidden lg:flex gap-[18px]"
        />

        <BurgerMenu
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          handleUserSession={handleUserSession}
          userLogout={userLogout}
          userName={userName}
          classBackdrop={`${isMenuOpen ? "scale-1" : "scale-0"}`}
          classMenu={`${isMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        />
        <button
          type="button"
          onClick={() => {
            toggleMenu();
          }}
          className="outline-none flex justify-between lg:hidden"
        >
          <MdOutlineMenu
            className="fill-textColor stroke-none md:w-10 md:h-10"
            size="32"
          />
        </button>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <ThemeToggle />
        </div>
        {(userName || user) && userLogout ? (
          <UserBar handleUserSession={handleUserSession} />
        ) : (
          <AuthButton
            handleUserSession={handleUserSession}
            className="hidden lg:flex gap-[8px] items-center"
            classLogIn="border border-textColor bg-transparent rounded-[30px] px-[38px] py-[14px] w-[124px] font-medium text-[16px] text-textColor leading-[1.25] tracking-[-0.01em] second-btn-hover"
            classRegistration="bg-accentColor rounded-[30px] px-[40px] py-[14px] w-[168px] font-medium text-[16px] leading-[1.25] tracking-[-0.01em] text-bgFirstColor primary-btn-hover"
          />
        )}
      </div>
    </header>
  );
};
