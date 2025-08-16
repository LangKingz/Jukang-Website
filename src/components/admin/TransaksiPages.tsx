"use client";

import { DataTransaksi, TransaksiResponse } from "@/model/transaksi";
import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import ModalUpdateTrans from "../ModalUpdateTrans";

const TransaksiPages: React.FC = () => {
  const [transactions, setTransactions] = useState<DataTransaksi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<DataTransaksi>();

  const [struk, setStruk] = useState<DataTransaksi>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = "https://api-jukang.vercel.app/transaksi/semua"; // URL API Transaksi Anda
        const response = await fetch(apiUrl);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`Kesalahan HTTP! Status: ${response.status}. Pesan: ${errorData.message || "Tidak dikenal"}`);
        }

        const apiData: TransaksiResponse = await response.json();

        // Pastikan apiData.data adalah array dan status adalah 'success'
        if (apiData.status === "success" && Array.isArray(apiData.data)) {
          setTransactions(apiData.data);
        } else {
          setError("Struktur data transaksi tidak valid dari API.");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(`Gagal mengambil data transaksi: ${err.message}`);
        } else {
          setError("Terjadi kesalahan tak terduga saat mengambil data transaksi.");
        }
        console.error("Error mengambil data transaksi:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (t: DataTransaksi) => {
    const response = await fetch(`https://api-jukang.vercel.app/transaksi/${t.id_transaksi}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Gagal menghapus transaksi! Status: ${response.status}. Pesan: ${errorData.message || "Tidak dikenal"}`);
    }
    const data = await response.json();
    if (data.status === "success") {
      alert("Transaksi berhasil dihapus");
      setTransactions(transactions.filter((transaction) => transaction.id_transaksi !== t.id_transaksi));
    } else {
      alert("Gagal menghapus transaksi: " + data.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full bg-gray-100 font-inter">
        <div className="text-xl font-semibold text-gray-700">Memuat data transaksi...</div>
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

  if (transactions.length === 0) {
    return (
      <div className="flex justify-center items-center h-full bg-white shadow-lg rounded-xl p-6">
        <p className="text-gray-600 text-lg">Tidak ada data transaksi yang ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tabel Transaksi</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Struk</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">ID Transaksi</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Pelanggan</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Tukang</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spesialis</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lat</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Long</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metode Pembayaran</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Dibuat Pada</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((t) => (
              <tr key={t.id_transaksi} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  <button
                    onClick={() => {
                      const modal = document.getElementById("struk_modal") as HTMLDialogElement;
                      modal?.showModal();
                      setStruk(t);
                    }}
                    className="px-3 py-1 rounded-md cursor-pointer text-white text-xs font-medium bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
                  >
                    Lihat Struk
                  </button>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${t.status_code === "pending" ? "bg-yellow-100 text-yellow-800" : ""}
                    ${t.status_code === "diterima" ? "bg-green-100 text-green-800" : ""}
                    ${t.status_code === "Selesai" ? "bg-blue-100 text-blue-800" : ""}
                  `}
                  >
                    {t.status_code}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  <span className="block max-w-[100px] truncate" title={t.id_transaksi}>
                    {t.id_transaksi}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{t.dataUser.namalengkap}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{t.dataTukang.namatukang}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{t.dataTukang.spesialis}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{new Date(t.tanggal).toLocaleDateString()}</td>

                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{t.lat}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{t.long}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{t.metodePembayaran}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{t.dataTukang.priceRupiah}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{new Date(t.createdAt).toLocaleString()}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(t)}
                    className={`px-3 py-1 rounded-md cursor-pointer text-white text-xs font-medium bg-red-500 hover:bg-red-600 transition-colors duration-200`}
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.getElementById("my_modal_3") as HTMLDialogElement | null;
                      modal?.showModal();
                      setFormData(t);
                    }}
                    className={`px-3 py-1 rounded-md cursor-pointer text-white text-xs font-medium bg-violet-500 hover:bg-violet-600 transition-colors duration-200`}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {struk && (
        <Modal
          data={struk}
          onClose={() => {
            const modal = document.getElementById("struk_modal") as HTMLDialogElement;
            modal?.close();
          }}
          onPrint={() => {
            const modal = document.getElementById("struk_modal") as HTMLDialogElement;
            modal?.close();
            window.print();
          }}
        />
      )}

      {formData && (
        <ModalUpdateTrans
          data={formData}
          onClose={() => {
            const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
            modal?.close();
          }}
        />
      )}
    </div>
  );
};

export default TransaksiPages;
