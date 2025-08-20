"use client";
import { CONFIG } from "@/hooks/URLBASE";
import { kategori, kategoriResponse } from "@/model/kategori";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const KategoriTukang = () => {
  const [kategori, setKategori] = useState<kategori[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    Spesialis: "",
  });

  const handleAddKategori = async () => {
    try {
      const response = await fetch("https://api-jukang.vercel.app/kategori", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Kategori gagal ditambahkan.",
        });
      }

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Kategori berhasil ditambahkan.",
      });

      fetchKategori();
    } catch (error) {
      console.error("Error adding kategori:", error);
      setError("Gagal menambahkan kategori.");
    }
  };

  const handleDelete = async (data: kategori) => {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}kategori/${data.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Kategori gagal dihapus.",
        });
      }

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Kategori berhasil dihapus.",
      });
      setKategori(kategori.filter((item)=> item.id !== data.id))
    } catch (error) {
      console.error("Error deleting kategori:", error);
      setError("Gagal menghapus kategori.");
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Kategori gagal dihapus.",
      });
    }
  };

  const fetchKategori = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api-jukang.vercel.app/kategori");
      const data = (await response.json()) as kategoriResponse;
      setKategori(data.list);
    } catch (error) {
      console.error("Error fetching kategori:", error);
      setError("Gagal memuat data kategori.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKategori();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full bg-gray-100 font-inter">
        <div className="text-xl font-semibold text-gray-700">Memuat data kategori...</div>
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
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tabel Kategori Tukang</h2>

      <button
        onClick={() => {
          const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
          modal?.showModal();
        }}
        className="btn btn-primary mb-10"
      >
        Tambah Kategori
      </button>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        {kategori.length === 0 ? (
          <div className="flex justify-center items-center h-full bg-white shadow-lg rounded-xl p-6">
            <p className="text-gray-600 text-lg">Tidak ada data kategori tukang ditemukan.</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">id</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spesialis</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {kategori.map((items, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm text-gray-700">{items.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{items.Spesialis}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <button className="btn btn-sm btn-primary">Edit</button>
                    <button onClick={() => handleDelete(items)} className="btn btn-sm btn-danger">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <dialog id="my_modal_3" className="modal sm:modal-middle modal-bottom">
        <div className="modal-box">
          <form method="dialog">
            <button
              onClick={() => {
                const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
                modal?.close();
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Transaksi</h3>
          <p className="py-4">Silakan perbarui informasi transaksi di bawah ini:</p>
          <div className="flex items-center flex-col">
            <input type="text" className="input" placeholder="Spesialis" onChange={(e) => setFormData({ ...formData, Spesialis: e.target.value })} />
          </div>

          <div className="modal-action">
            <button type="submit" onClick={handleAddKategori} className="btn btn-primary">
              Tambah
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default KategoriTukang;
