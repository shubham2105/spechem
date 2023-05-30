import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-blue-500 mb-4 md:mb-0">
          <span className="ml-3 text-4xl">Speciality Chemicals</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-blue-500">Home</a>
          <a className="mr-5 hover:text-blue-500">About Us</a>
          <a className="mr-5 hover:text-blue-500">Products</a>
          <a className="mr-5 hover:text-blue-500">Feedback</a>
          <a className="mr-5 hover:text-blue-500">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
