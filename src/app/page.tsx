import Herosection from "@/components/Herosection";
import Worksection from "@/components/Worksection";

export default function Home() {
  return (
    <>
      <Herosection />

      {/* <!-- Services Section --> */}
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Berbagai layanan tukang profesional untuk semua kebutuhan rumah Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tukang Kayu</h3>
              <p className="text-gray-600">Pembuatan dan perbaikan furniture, kusen, dan konstruksi kayu</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tukang Listrik</h3>
              <p className="text-gray-600">Instalasi dan perbaikan sistem kelistrikan rumah dan kantor</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tukang Bangunan</h3>
              <p className="text-gray-600">Konstruksi, renovasi, dan perbaikan struktur bangunan</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tukang Ledeng</h3>
              <p className="text-gray-600">Instalasi dan perbaikan sistem air dan sanitasi</p>
            </div>
          </div>
        </div>
      </section>

      <Worksection />

      {/* <!-- Why Choose Us Section --> */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Mengapa Memilih JuKang ID?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Kami memberikan solusi terbaik untuk kebutuhan tukang Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">✓</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tukang Terverifikasi</h3>
              <p className="text-gray-600">Semua tukang telah melalui proses verifikasi dan memiliki sertifikat keahlian</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Harga Transparan</h3>
              <p className="text-gray-600">Tidak ada biaya tersembunyi, harga sudah termasuk pajak dan biaya administrasi</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🛡️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Garansi Pekerjaan</h3>
              <p className="text-gray-600">Setiap pekerjaan dilindungi garansi dan asuransi untuk kepuasan Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl text-gray-100 mb-8">Temukan tukang profesional yang tepat untuk kebutuhan Anda hari ini juga</p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            Mulai Sekarang - Gratis!
          </button>
        </div>
      </section>
    </>
  );
}
