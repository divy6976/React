import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Messi Images Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://i0.wp.com/sportytell.com/wp-content/uploads/2018/12/Lionel-Messi-of-FC-Barcelona.jpg?fit=1920%2C1080&ssl=1"
              alt="Messi Barcelona"
              className="w-32 h-auto rounded-lg shadow"
            />
            <img
              src="https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000"
              alt="Messi FIFPro"
              className="w-32 h-auto rounded-lg shadow"
            />
          </div>

          {/* Existing Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* ... tumhare resources, follow us, legal links ... */}
          </div>
        </div>
      </div>
    </footer>
  );
}
