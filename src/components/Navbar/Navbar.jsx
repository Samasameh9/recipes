import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo-BfNap0Pe.png";
export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeNavbar() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={closeNavbar}
        ></div>
      )}
      {isOpen ? (
        <nav className=" md:block fixed w-1/2 bg-white sm:w-65  md:w-1/3 lg:w-1/4 xl:w-1/5  h-full z-40">
          <div>
            {" "}
            <div className="logo w-60 mx-auto">
              {" "}
              <img src={logo} className="w-full" alt="logo" />
            </div>
            <ul className="flex flex-col gap-6 ">
              <li className=" border text-xl  border-amber-500 w-60 font-bold mx-auto text-white bg-amber-500 rounded-xl py-2 px-4 shadow-lg shadow-orange-200 hover:scale-102 hover:sm:scale-105  hover:md:scale-110 hover:lg:scale-110 transition-all duration-300 hover:shadow-amber-50">
                <Link className="flex items-center gap-2" to="/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path>
                  </svg>
                  <div>Meals</div>
                </Link>
              </li>
              <li className="text-xl border border-gray-500  w-60   mx-auto  rounded-xl py-2 px-4 hover:scale-102 hover:sm:scale-105 hover:md:scale-110 hover:lg:scale-110 transition-all duration-300 hover:shadow-orange-50 hover:shadow-lg">
                <Link className="flex items-center gap-2" to="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path>
                  </svg>
                  <div>Ingredients</div>
                </Link>
              </li>
              <li className="text-xl border border-gray-500  w-60  mx-auto  rounded-xl py-2 px-4 hover:scale-102 hover:sm:scale-105 hover:md:scale-110 hover:lg:scale-110 transition-all duration-300  hover:shadow-orange-50 hover:shadow-lg">
                <Link className="flex items-center gap-2" to="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path>
                  </svg>
                  <div>Area</div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className=" hidden md:block fixed w-1/2 bg-white  sm:w-65  md:w-1/3 lg:w-1/4 xl:w-1/5  h-full">
          <div>
            {" "}
            <div className="logo w-60 mx-auto">
              {" "}
              <img src={logo} className="w-full" alt="logo" />
            </div>
            <ul className="flex flex-col gap-6 ">
              <li className=" text-lg border  border-amber-500 w-60  font-bold mx-auto text-white bg-amber-500 rounded-xl py-2 2xl:w-70 2xl:py-3 px-4 shadow-lg shadow-orange-200 hover:scale-102 hover:sm:scale-105  hover:md:scale-110 hover:lg:scale-110 transition-all duration-300 hover:shadow-amber-50">
                <Link className="flex items-center gap-2" to="/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path>
                  </svg>
                  <div>Meals</div>
                </Link>
              </li>
              <li className="text-lg border border-gray-500  w-60   mx-auto  rounded-xl py-2  2xl:w-70 2xl:py-3 px-4 hover:scale-102 hover:sm:scale-105 hover:md:scale-110 hover:lg:scale-110 transition-all duration-300 hover:shadow-orange-50 hover:shadow-lg">
                <Link className="flex items-center gap-2" to="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path>
                  </svg>
                  <div>Ingredients</div>
                </Link>
              </li>
              <li className="text-lg border border-gray-500  w-60  mx-auto  rounded-xl py-2  2xl:w-70 2xl:py-3 px-4 hover:scale-102 hover:sm:scale-105 hover:md:scale-110 hover:lg:scale-110 transition-all duration-300  hover:shadow-orange-50 hover:shadow-lg">
                <Link className="flex items-center gap-2" to="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path>
                  </svg>
                  <div>Area</div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <div
        onClick={toggleMenu}
        className=" visible md:hidden ps-3 pt-5 text-2xl cursor-pointer"
      >
        {" "}
        <i class="fa-solid fa-bars"></i>
      </div>
    </>
  );
}
