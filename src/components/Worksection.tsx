import React from "react";

const Worksection = () => {
  return (
    <section id="tukang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Tukang Pilihan</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tukang-tukang terbaik dan berpengalaman yang siap membantu Anda</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Worker Card 1 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                AB
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-gray-800">Ahmad Budi</h3>
                                <p className="text-gray-600">Tukang Kayu</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <div className="flex text-yellow-400">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">4.9 (127 ulasan)</span>
                        </div>
                        <p className="text-gray-600 mb-4">Pengalaman 15 tahun dalam pembuatan furniture custom dan renovasi rumah</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">Rp 150k</span>
                            <span className="text-gray-500">/hari</span>
                        </div>
                        <button className="w-full mt-4 gradient-bg text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
                
                {/* <!-- Worker Card 2 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                SM
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-gray-800">Siti Mariah</h3>
                                <p className="text-gray-600">Tukang Listrik</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <div className="flex text-yellow-400">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">4.8 (89 ulasan)</span>
                        </div>
                        <p className="text-gray-600 mb-4">Spesialis instalasi listrik rumah dan troubleshooting sistem kelistrikan</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">Rp 200k</span>
                            <span className="text-gray-500">/hari</span>
                        </div>
                        <button className="w-full mt-4 gradient-bg text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
                
                {/* <!-- Worker Card 3 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                RH
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-gray-800">Rizki Hasan</h3>
                                <p className="text-gray-600">Tukang Bangunan</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <div className="flex text-yellow-400">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">5.0 (156 ulasan)</span>
                        </div>
                        <p className="text-gray-600 mb-4">Ahli dalam renovasi dan konstruksi bangunan dengan hasil berkualitas tinggi</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">Rp 175k</span>
                            <span className="text-gray-500">/hari</span>
                        </div>
                        <button className="w-full mt-4 gradient-bg text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-200">
                    Lihat Semua Tukang
                </button>
            </div>
        </div>
    </section>
  );
};

export default Worksection;
