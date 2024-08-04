import { Link, NavLink } from "react-router-dom";

import { useLocalStorage } from "../../hooks";

interface INavBarProps {
  className: string;
  toggleMenu?: () => void;
  userName: string;
  userLogout: boolean;
}

export const NavBar = ({
  className = "",
  toggleMenu,
  userName,
  userLogout,
}: INavBarProps) => {
  const [user] = useLocalStorage("user", null);

  return (
    <nav className="flex flex-col gap-[80px] items-center justify-center lg:flex-row lg:gap-[180px]">
      <Link
        to="/"
        className="font-semibold text-textColor sm-max:text-[16px] text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.02em]"
      >
        <span className="text-accentColor font-bold leading-[1.2] tracking-[-0.02em]">
          event-
        </span>
        view
      </Link>
      <ul className={className}>
        <li onClick={toggleMenu} className="link text-textColor">
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={toggleMenu} className="link text-textColor">
          <NavLink to="board">Events</NavLink>
        </li>
        {(userName || user) && userLogout && (
          <li onClick={toggleMenu} className="link text-textColor">
            <NavLink to="schedule">Schedule</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
