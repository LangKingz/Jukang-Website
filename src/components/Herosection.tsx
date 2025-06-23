import React from "react";

const Herosection = () => {
  return (
    <section className="gradient-bg hero-pattern py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white slide-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Temukan Tukang
              <span className="text-yellow-300">Profesional</span>
              Terpercaya
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              Platform terdepan untuk menghubungkan Anda dengan tukang berpengalaman di seluruh Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Cari Tukang Sekarang
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200">
                Daftar Sebagai Tukang
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="floating bounce-in">
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Siap Membantu!</h3>
                  <p className="text-gray-600">Lebih dari 10,000+ tukang profesional siap melayani Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
