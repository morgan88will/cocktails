import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="hover:underline flex-shrink-0 text-white font-bold text-xl"
              >
                Cocktail Finder
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="hover:underline text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Home
                  </Link>

                  <Link
                    to="/saved-cocktails"
                    className="hover:underline text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    My Cocktails
                  </Link>

                  <Link
                    to="/about"
                    className="hover:underline text-white px-3 py-2 rounded-md text-sm font-medium font-semibold"
                  >
                    About
                  </Link>

                  {/* <a
                    href="/"
                    className="hover:underline text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Popular Cocktails
                  </a> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md hover:text-white outline-none ring-2 ring-offset-2 ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="hover:underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Home
                </Link>

                <Link
                  to="/saved-cocktails"
                  className="hover:underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  My Cocktails
                </Link>

                <a
                  href="/about"
                  className="hover:underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  About
                </a>

                {/* <a
                  href="/"
                  className=" hover:underline text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Popular Cocktails
                </a> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
