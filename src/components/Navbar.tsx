import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <!-- Logo --> */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={"/"} className="text-2xl font-bold text-gray-800">
                JuKang <span className="text-[#667eea]">ID</span>
              </Link>
            </div>
          </div>

          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Beranda
              </a>
              <a href="#layanan" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Layanan
              </a>
              <a href="#tukang" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Tukang
              </a>
              <a href="#tentang" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Tentang
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200">
                Kontak
              </a>
            </div>
          </div>

          {/* <!-- Login Button --> */}
          <div className="hidden md:block">
            <Link href={"/login"} className="gradient-bg text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Masuk
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden">
            <button id="mobile-menu-button" className="text-gray-700 hover:text-primary p-2">
              <img src="/svf/burger.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div id="mobile-menu" className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
            Beranda
          </a>
          <a href="#layanan" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
            Layanan
          </a>
          <a href="#tukang" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
            Tukang
          </a>
          <a href="#tentang" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
            Tentang
          </a>
          <a href="#kontak" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
            Kontak
          </a>
          <button className="gradient-bg text-white px-6 py-2 rounded-lg text-sm font-medium w-full mt-3">Masuk</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
