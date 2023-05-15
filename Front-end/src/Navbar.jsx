import React from "react";

export default function Navbar() {
  const activea =
    "block py-2 pl-3 pr-4 text-gray-900 bg-[#867070] rounded md:bg-transparent md:text-[#867070] md:p-0 md:dark:text-[#867070]";
  const normala =
    "block py-2 pl-3 pr-4 text-white focus:border-b-2 focus:border-[#867070]  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#867070] md:p-0 md:dark:hover:text-[#867070] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <>
      <header>
        <nav className="bg-black dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-50 h-16	 ">
          <div className=" relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a to="/" className="flex items-center"></a>
            <div className="flex md:order-2">
              <button>Login</button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
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
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col  text-white p-4 md:p-0 mt-4 font-medium  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
