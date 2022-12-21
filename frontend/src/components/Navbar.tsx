import React, { useState } from "react";

export default function Navbar() {
  function Menu(id: string) {
    if (typeof window !== "undefined") {
      let list = document.getElementById(id);
      if (id === "user-dropdown") {
        if (userMenu) {
          setUser(false);
          list?.classList.add("hidden");
          list?.classList.remove("visible");
        } else {
          setUser(true);
          list?.classList.add("visible");
          list?.classList.remove("hidden");
        }
      } else if (id === "navbar-default") {
        if (burgerMenu) {
          setBurger(false);
          list?.classList.add("hidden");
          list?.classList.remove("visible");
        } else {
          setBurger(true);
          list?.classList.add("visible");
          list?.classList.remove("hidden");
        }
      }
    }
  }

  const [burgerMenu, setBurger] = useState(false);
  const [userMenu, setUser] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-secondary">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://github.com/svenahac" className="flex items-center">
          <img
            src="/assets/movie-icon.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Movie Logo"
          ></img>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            MovieDB
          </span>
        </a>

        <div className="flex items-center md:order-2">
          <div className="overflow-hidden float-left">
            <button
              onClick={() => Menu("user-dropdown")}
              name="closed"
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0"
              id="user-menu-button"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="/assets/profilepic.png"
                alt="Profile Picture"
              ></img>
            </button>
            <div
              className="hidden absolute right-1 big:right-1 vbig:right-10 z-50 my-4 text-base list-none bg-gray-700 rounded divide-y divide-gray-600 shadow"
              id="user-dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm text-white">Test</span>
                <span className="block text-sm font-medium text-gray-400 truncate ">
                  name@test.com
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => Menu("navbar-default")}
            name="closed"
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg md:hidden  focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden md:relative md:top-0 w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-secondary rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-secondary ">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
