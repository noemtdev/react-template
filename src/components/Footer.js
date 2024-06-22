import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-dark rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/assets/icon.webp" className="h-8" alt="logo" />
            <span className="self-center text-2xl whitespace-nowrap dark:text-white hover:underline">
              Website Name
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/example-link" className="hover:underline me-4 md:me-6">
                Example link
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <span className="inline-flex items-center copyright-text">
            <FaCopyright />
            &nbsp;<span className="ml-1">{getYear()}&nbsp;</span>
            <a href="/" className="hover:underline">
              Copyright person
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
