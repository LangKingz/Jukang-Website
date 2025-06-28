"use client";

import DashboardPages from "@/components/admin/DashboardPages";
import PendaftaranPages from "@/components/admin/PendaftaranPages";
import SettingsPages from "@/components/admin/SettingsPages";
import TransaksiPages from "@/components/admin/TransaksiPages";
import TukangPages from "@/components/admin/TukangPages";
import React, { useState } from "react";

const App = () => {
  // State untuk melacak halaman saat ini yang ditampilkan
  const [currentPage, setCurrentPage] = useState<string>("dashboard"); // Halaman default
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // State untuk mengelola sidebar pada layar kecil

  // Fungsi untuk merender komponen halaman yang sesuai berdasarkan currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPages />;
      case "registrations":
        return <PendaftaranPages />;
      case "settings":
        return <SettingsPages />;
      case "tukang":
        return <TukangPages />;
      case "transaksi":
        return <TransaksiPages />;
      default:
        return <DashboardPages />; // Kembali ke Dasbor jika halaman tidak ditemukan
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-inter">
      {/* Sidebar Navigasi */}
      <aside className="w-full lg:w-64 bg-gray-800 text-white p-4 lg:p-6 shadow-lg rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
        <div className="text-3xl font-bold mb-8 text-center flex items-center justify-between">
          <h1>Admin Panel</h1>
          <button className="lg:hidden block" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
        </div>
        <nav className={`${isSidebarOpen ? "hidden" : ""}  lg:block`}>
          <ul>
            <li className="mb-4">
              {/* Tombol navigasi Dasbor */}
              <button
                onClick={() => setCurrentPage("dashboard")}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-left 
                  ${currentPage === "dashboard" ? "bg-gray-700 text-teal-400" : "hover:bg-gray-700 hover:text-white"}
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75`}
              >
                {/* Ikon Dasbor (SVG) */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                Dasbor
              </button>
            </li>
            <li className="mb-4">
              {/* Tombol navigasi Pendaftaran */}
              <button
                onClick={() => setCurrentPage("registrations")}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-left 
                  ${currentPage === "registrations" ? "bg-gray-700 text-teal-400" : "hover:bg-gray-700 hover:text-white"}
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75`}
              >
                {/* Ikon Pendaftaran (SVG) */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                Pendaftaran
              </button>
            </li>
            <li className="mb-4">
              {/* Tombol navigasi Pengaturan */}
              <button
                onClick={() => setCurrentPage("tukang")}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-left 
                  ${currentPage === "tukang" ? "bg-gray-700 text-teal-400" : "hover:bg-gray-700 hover:text-white"}
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75`}
              >
                {/* Ikon Pengaturan (SVG) */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253M12 6.253c1.168-.776 2.754-1.253 4.5-1.253s3.332.477 4.5 1.253m-12 5.41a3.75 3.75 0 100 7.5m0-7.5l-2.25 2.25M12 12.253l-2.25 2.25m2.25-2.25l2.25 2.25m0 0l2.25 2.25M12 14.5a3.75 3.75 0 100 7.5M12 14.5c1.168.776 2.754 1.253 4.5 1.253s3.332-.477 4.5-1.253"
                  ></path>
                </svg>
                Tukang
              </button>
            </li>
            <li className="mb-4">
              {/* Tombol navigasi Transaksi */}
              <button
                onClick={() => setCurrentPage("transaksi")}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-left 
                  ${currentPage === "transaksi" ? "bg-gray-700 text-teal-400" : "hover:bg-gray-700 hover:text-white"}
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75`}
              >
                {/* Ikon Transaksi (SVG) */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9.5a3 3 0 013-3h.5a3 3 0 013 3V19m-4-7h-4"
                  ></path>
                </svg>
                Transaksi
              </button>
            </li>
            <li className="mb-4">
              {/* Tombol navigasi Pengaturan */}
              <button
                onClick={() => setCurrentPage("settings")}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-left 
                  ${currentPage === "settings" ? "bg-gray-700 text-teal-400" : "hover:bg-gray-700 hover:text-white"}
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75`}
              >
                {/* Ikon Pengaturan (SVG) */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00
                  -2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.573-1.066z"
                  ></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Pengaturan
              </button>
            </li>
            {/* Anda dapat menambahkan lebih banyak item menu di sini */}
          </ul>
        </nav>
      </aside>

      {/* Konten Utama */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {renderPage()} {/* Merender halaman yang sedang aktif */}
      </main>
    </div>
  );
};

export default App;
