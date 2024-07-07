import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="">
      <nav className="container">
        <ul className="flex gap-[18px]">
          <li>
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="board">
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
