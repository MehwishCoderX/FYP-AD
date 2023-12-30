'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/"  className="text-white text-xl font-bold" >
             AR.Design
          </Link>
          <div className="hidden md:block">
            <ul className="ml-12 flex items-baseline space-x-4 text-white">
              <li>
                <Link href="/">
                Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-4 text-white">
            <li>
              <Link href="/signup" className=" px-8 py-1.5 bg-transparent hover:bg-white-500 text-blue-700 font-semibold hover:text-white border border--500 hover:border-transparent rounded ease-in duration-300">
                Sign Up
              </Link>
            </li>
            <li>
              <Link href="/login" className="px-8 py-1.5 rounded-md bg-red-800   hover:bg-pink-500">
              Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center justify-center bg-gray-700 py-4 space-y-4 text-white">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
            About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/signup"className="px-5 py-3 rounded-md bg-gray-900 ">
                Sign Up
              </Link>
            </li>
            <li>
              <Link href="/login"className="px-5 py-3 rounded-md bg-gray-900">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      )}
       
    </nav>
    
  );
 
};

export default Navbar;
