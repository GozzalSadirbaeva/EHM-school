import { memo, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#315033] p-4 md:rounded-b-[30px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <img src="/logo1.svg" alt="" />
            <p className="font-bold text-[28px] leading-6 text-white">
              EHM Gymnasium
            </p>
          </div>
          <div>
            <button
              className="text-white md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            <div
              className={`
    md:flex md:space-x-10 md:static md:opacity-100 md:visible
    ${
      isOpen
        ? "absolute top-20 left-0 w-full bg-[#315033] rounded-b-xl p-5 opacity-100 visible"
        : "hidden opacity-0 invisible"
    }
  `}
            >
              <div className="flex flex-col items-start space-y-4 md:flex-row md:space-y-0 md:items-center md:space-x-10">
                <NavLink to={"/"} className="nav-text">
                  Bosh sahifa
                </NavLink>
                <NavLink to={"/about"} className="nav-text">
                  Biz haqimizda
                </NavLink>
                <NavLink to={"/program"} className="nav-text">
                  Ta`lim dasturi
                </NavLink>
                <NavLink to={"/application"} className="nav-text">
                  Ariza yuborish
                </NavLink>
                <NavLink to={"/contact"} className="nav-text">
                  Bog’lanish
                </NavLink>
                <div className="flex items-center gap-4">
                  <p className="text-white font-bold text-base leading-6">UZ</p>
                  <img src="/Vector-down.svg" alt="Tilni tanlash" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default memo (Navbar);
