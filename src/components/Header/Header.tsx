import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="">
      <nav>
        <ul className="flex gap-[30px]">
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
