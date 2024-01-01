import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./Social";

function Header() {
  return (
    <div className="flex justify-around items-center h-16 w-full mt-8 ">
      <div
        className="mx-4 font-semibold text-3xl font-serif text-white "
        style={{ fontFamily: "Teko" }}
      >
        Niraj Chaudhari
      </div>
      <ul className="flex justify-center items-center gap-4 font-thin text-gray-400 ">
        <li className="cursor-pointer">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={"/skills"}
            className={({ isActive }) =>
              `${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            Skills
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              `${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to={"/academic"}
            className={({ isActive }) =>
              `${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            Academic Work
          </NavLink>
        </li>
      </ul>
      <div className="mx-5">
        <Social />
      </div>
    </div>
  );
}

export default Header;
