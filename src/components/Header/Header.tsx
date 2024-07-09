import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b border-b-borderColor py-8">
      <nav className="container flex justify-between items-center">
        <Link
          to="/"
          className="font-semibold sm-max:text-[16px] text-[18px] md:text-[20px] leading-[120%] tracking-[-0.02em]"
        >
          <span className="text-accentColor font-bold leading-[120%] tracking-[-0.02em]">
            event-
          </span>
          view
        </Link>
        <ul className="flex gap-[18px]">
          <li className="link">
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="board">Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
