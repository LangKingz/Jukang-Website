"use client";

import { Tukang, TukangApiResponse } from "@/model/tukang";
import React, { useEffect, useState } from "react";
import ModalTukang from "../ModalTukang";

// Interface baru untuk data Tukang

const TukangPages = () => {
  const [tukangs, setTukangs] = useState<Tukang[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(10); // Menambahkan state limit
  const [formData, setFormData] = useState({
    namatukang: "",
    review: 0,
  });

  const [detail, setDetail] = useState<Tukang>();

  const openModal = () => {
    (document.getElementById("my_modal_1") as HTMLDialogElement).showModal();
  };

  const handleAddData = async () => {
    try {
      const response = await fetch("https://api-jukang.vercel.app/tukang", {
        method: "POST",
        body: JSON.stringify({
          namatukang: formData.namatukang,
          review: formData.review,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan data tukang.");
      }

      // const newData = await response.json();
      fetchData(); // Memanggil fetchData untuk memperbarui daftar tukang
      // setTukangs((prevTukangs) => [...prevTukangs, newData]);

      // 4. Reset form dengan mengembalikan state ke nilai awal
      setFormData({
        namatukang: "",
        review: 0,
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat menambahkan data:", error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = `https://api-jukang.vercel.app/tukang?limit=${limit}`; // URL API Tukang
      const response = await fetch(apiUrl, {
        method: "GET",
        cache: "no-store", // Pastikan tidak menggunakan cache
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Kesalahan HTTP! Status: ${response.status}. Pesan: ${errorData.message || "Tidak dikenal"}`);
      }

      const apiData: TukangApiResponse = await response.json();

      if (apiData.status === "success" && Array.isArray(apiData.tukang)) {
        setTukangs(apiData.tukang);
      } else {
        setError("Struktur data tukang tidak valid dari API.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(`Gagal mengambil data tukang: ${err.message}`);
      } else {
        setError("Terjadi kesalahan tak terduga saat mengambil data tukang.");
      }
      console.error("Error mengambil data tukang:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLimitChange = async () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  const handleDelete = async (user: Tukang) => {
    try {
      const response = await fetch(`https://api-jukang.vercel.app/tukang/${user.tukang_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus pendaftaran.");
      }

      setTukangs(tukangs.filter((tukang) => tukang.tukang_id !== user.tukang_id));
    } catch (error) {
      alert("Fitur hapus pendaftaran belum tersedia.");
      console.error("Terjadi kesalahan saat menghapus pendaftaran:", error);
      setError("Gagal menghapus pendaftaran. Silakan coba lagi.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full bg-gray-100 font-inter">
        <div className="text-xl font-semibold text-gray-700">Memuat data tukang...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full bg-red-100 font-inter">
        <div className="text-xl font-semibold text-red-700">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800  text-center">Daftar Tukang</h2>
      <div className="flex mb-5">
        <button className="btn btn-primary" onClick={openModal}>
          Fake Data
        </button>
      </div>
      {/* tambah data */}
      <dialog id="my_modal_1" className="modal">
        <div className="bg-slate-900 p-10 rounded-2xl">
          <div className="flex justify-center">
            <form method="dialog" onSubmit={handleAddData}>
              {/* /* Input untuk Nama Tukang */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text text-base">Nama Tukang</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  className="input input-bordered w-full text-black bg-gray-50 focus:border-primary"
                  name="namatukang" // 5. Tambahkan atribut 'name' yang sesuai dengan key di state
                  value={formData.namatukang} // Ikat value ke property state yang sesuai
                  onChange={(e) => setFormData({ ...formData, namatukang: e.target.value })} // 6. Tambahkan onChange untuk memperbarui state
                  required
                />
              </div>
              {/* Input untuk Review */}
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text text-base">Rating Awal (0-5)</span>
                </label>
                <input
                  type="number"
                  placeholder="Contoh: 4"
                  className="input input-bordered w-full text-black bg-gray-50 focus:border-primary"
                  name="review" // 5. Tambahkan atribut 'name' yang sesuai dengan key di state
                  value={formData.review} // Ikat value ke property state yang sesuai
                  onChange={(e) => setFormData({ ...formData, review: Number(e.target.value) })} // 6. Tambahkan onChange untuk memperbarui state
                  min="0"
                  max="5"
                  required
                />
              </div>

              <button className="btn btn-primary w-full">Tambah</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Info</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">ID Tukang</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Tukang</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spesialis</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomor Telepon</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domisili</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review (Avg)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Dibooking</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tukangs.map((tukang, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  <button
                    className="btn btn-soft"
                    onClick={() => {
                      const modal = document.getElementById("detail_tukang_modal  ") as HTMLDialogElement;
                      modal.showModal();
                      setDetail(tukang);
                    }}
                  >
                    Detail
                  </button>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  <span className="block max-w-[100px] truncate" title={tukang.tukang_id}>
                    {tukang.tukang_id}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{tukang.namatukang}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{tukang.spesialis}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{tukang.nomor_telpon || "N/A"}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{tukang.email || "N/A"}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  {tukang.photoUrl ? (
                    <img
                      src={tukang.photoUrl}
                      alt="Foto Tukang"
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/50x50/cccccc/ffffff?text=N/A";
                      }}
                    />
                  ) : (
                    <span className="text-gray-500">Tidak Ada</span>
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{tukang.priceRupiah}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{tukang.domisili}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  {tukang.review} ({tukang.reviewCount} ulasan)
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  {tukang.booked ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Ya</span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Tidak</span>
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  <button
                    onClick={() => handleDelete(tukang)}
                    className={`px-3 py-1 rounded-md cursor-pointer text-white text-xs font-medium bg-red-500 hover:bg-red-600 transition-colors duration-200`}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex">
        <button
          onClick={handleLimitChange}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Tampilkan Lebih Banyak ({limit})
        </button>
      </div>
      <div className="mt-4 text-center text-gray-500">
        <p>Total Tukang: {tukangs.length}</p>
      </div>
      {detail && <ModalTukang tukang={detail} onClose={() => (document.getElementById("detail_tukang_modal") as HTMLDialogElement).close()} />}
    </div>
  );
};

export default TukangPages;
