import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to add active class based on the current route
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "block py-2 pl-3 pr-4 text-white bg-pink-700 rounded lg:bg-transparent lg:text-[#1BF7A8] lg:p-0"
      : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#1BF7A8] lg:p-0";
  };

  // Load Lordicon script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on component unmount
    };
  }, []);
  // Load Lordicon script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/bazecvhf.json";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on component unmount
    };
  }, []);

  return (
    <nav className="py-2.5 z-10 px-8 pl-12 mt-5 mx-auto sm:container">
      <div className="flex flex-wrap items-center justify-between px-4 w-full h-full   ">
        <Link to="/" className="flex items-center gap-1">
          <span className="self-center text-3xl font-medium whitespace-nowrap text-white">
            Bikesh
          </span>
          <span className="text-[#1BF7A8] text-3xl font-extrabold">.</span>
        </Link>
        <div className="flex items-center lg:order-2">
          <div
            className="icon-container"
            style={{ position: "relative", width: "80px", height: "80px" }}
          >
            <lord-icon
              src="https://cdn.lordicon.com/zubhquzc.json"
              trigger="hover"
              colors="primary:#1bf7a8,secondary:#ffffff"
              style={{
                width: "70px",
                height: "70px",
                position: "absolute",
                top: "5px",
                left: "5px",
                zIndex: 2,
              }}
            ></lord-icon>
            <lord-icon
              src="https://cdn.lordicon.com/bazecvhf.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: 1,
              }}
            ></lord-icon>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
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
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col items-center mt-4 text-sm font-light lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="/" className={`nav-link ${getLinkClass("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Gallery"
                className={`nav-link ${getLinkClass("/Gallery")}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/Work" className={`nav-link ${getLinkClass("/Work")}`}>
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className={`nav-link ${getLinkClass("/Services")}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/Resume"
                className={`nav-link ${getLinkClass("/Resume")}`}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`nav-link ${getLinkClass("/Contact")}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Hireme"
                className={`bg-[#1BF7A8] flex items-center justify-center w-24 h-8 border-0 hover:border hover:border-[#1BF7A8] rounded-xl text-lg ${getLinkClass(
                  "/Hireme"
                )}`}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
