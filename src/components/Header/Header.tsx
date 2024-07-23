import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "../../components";

export const Header = () => {
  return (
    <header className="border-b border-b-borderColor shadow-sm py-8 relative">
      <nav className="container flex justify-between items-center">
        <Link
          to="/"
          className="font-semibold text-textColor sm-max:text-[16px] text-[18px] md:text-[20px] leading-[120%] tracking-[-0.02em]"
        >
          <span className="text-accentColor font-bold leading-[120%] tracking-[-0.02em]">
            event-
          </span>
          view
        </Link>
        <ul className="flex gap-[18px]">
          <li className="link text-textColor">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="link text-textColor">
            <NavLink to="board">Events</NavLink>
          </li>
        </ul>
      </nav>
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <ThemeToggle />
      </div>
      {/* <AuthButton /> */}
    </header>
  );
};
