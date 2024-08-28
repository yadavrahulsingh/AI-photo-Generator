"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Pages", "Contact us", "Help", "Docs"].map((text) => (
        <li key={text} className="p-1 font-normal">
          <Link
            href="#"
            className="text-blue-gray-700 hover:text-blue-gray-900"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-none">
      <nav className="sticky top-0 z-10 bg-white shadow-lg px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-blue-gray-900 hover:text-red-400">
            My App
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <div className="hidden lg:flex items-center gap-x-1">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                Log in
              </Link>
            </div>
            <button
              className="lg:hidden text-blue-gray-900 focus:outline-none"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {openNav && (
          <div className="lg:hidden">
            {navList}
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </nav>
      
    </div>
  );
}
