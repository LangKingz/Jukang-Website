import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              JuKang <span className="text-primary">ID</span>
            </h3>
            <p className="text-gray-300">Platform tukang profesional terpercaya di Indonesia</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tukang Kayu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tukang Listrik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tukang Bangunan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tukang Ledeng
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@jukang.id</p>
              <p>📱 +62 821 1234 5678</p>
              <p>📍 Pontianak, Kalimantan Barat</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 JuKang ID. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
