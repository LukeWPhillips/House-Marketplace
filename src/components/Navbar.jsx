import { NavLink } from "react-router-dom";

import { useState } from "react";
import leafImg from "../assets/jpg/leaf.jpg";

// React Component allows top transform an svg file and turn into a usable
// component.

// NavLink used to linkl to pages and can take a function  -
// isActive which can change the style when pressed

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="navbar flex items-center justify-between border-b border-gray-400 py-8">
      <img src={leafImg} alt="logo" className="logo" />
      <div className="flex-1 px-2 mx-2 text-xl text-amber-500 ">Eco Living</div>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="hamburger space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="close-icon absolute top-0 right-0 px-9 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className=" flex flex-col items-center justify-between min-h-[250px]">
              <NavLink to="/home" onClick={() => setIsNavOpen(false)}>
                <li className="border-b border-gray-400 my-8 uppercase">
                  HOME
                </li>
              </NavLink>
              <NavLink to="/properties" onClick={() => setIsNavOpen(false)}>
                <li className="border-b border-gray-400 my-8 uppercase">
                  PROPERTIES
                </li>
              </NavLink>
              <NavLink to="/profile" onClick={() => setIsNavOpen(false)}>
                <li className="border-b border-gray-400 my-8 uppercase">
                  PROFILE
                </li>
              </NavLink>
            </ul>
          </div>
        </section>

        <ul className="desktop-menu hidden space-x-8 lg:flex">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/properties">Properties</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
