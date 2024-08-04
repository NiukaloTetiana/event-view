import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

import { Loader } from "../../components";
import { logOutUser } from "../../services";

interface ILogOutProps {
  toggleLogOutModal: () => void;
  handleUserSession: (name: string, userLogout: boolean) => void;
}

export const LogOut = ({
  toggleLogOutModal,
  handleUserSession,
}: ILogOutProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true);
    logOutUser()
      .then(() => {
        handleUserSession && handleUserSession("", false);
        toggleLogOutModal();
        if (pathname === "/schedule") {
          navigate("/home");
        }
        toast.info(
          "In order to see all events for which you are registered, please log in."
        );
      })
      .catch(() => {
        toast.error("Oops...Something wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <p className="font-medium text-[24px] text-center leading-[1.2] tracking-[-0.02em] text-textColor mb-[40px] sm-max:mb-[25px] sm-max:text-[25px] lg:text-[28px]">
        Are you sure you want to log out?
      </p>
      <div className="flex gap-[25px] justify-center">
        <button
          onClick={handleLogout}
          type="button"
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-bgFirstColor primary-btn-hover"
        >
          Log out
        </button>
        <button
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-bgFirstColor primary-btn-hover"
          onClick={toggleLogOutModal}
        >
          Cancel
        </button>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
