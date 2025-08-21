"use client";

import { CONFIG } from "@/hooks/URLBASE";
import { DataPendaftaran, PendaftaranResponse } from "@/model/pendaftaran";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PendaftaranPages: React.FC = () => {
  const [registrations, setRegistrations] = useState<DataPendaftaran[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://api-jukang.vercel.app/pendaftaran/semua`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Gagal mengambil data dari server.");
      }

      const data: PendaftaranResponse = await response.json();
      setRegistrations(data.data);
    } catch (err) {
      setError("Terjadi kesalahan tak terduga.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Efek hanya berjalan sekali saat komponen di-mount

  const handlerSetujui = async (user: DataPendaftaran) => {
    try {
      const response = await fetch(`https://api-jukang.vercel.app/tukang`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tukang_id: user.user_id,
          namatukang: user.namalengkap,
          domisili: user.domisili,
          nomor_telpon: user.nomortelp,
          review: 0,
          photoUrl: user.photoprofile,
          spesialis: user.spesialis,
          email: user.email,
        }),
      });
      const response1 = await fetch(`https://api-jukang.vercel.app/users/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.user_id,
          role: "tukang",
        }),
      });

      const response3 = await fetch(`${CONFIG.BASE_URL}pendaftaran/update/${user.user_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "diterima",
        }),
      });

      const response2 = await fetch("https://api-jukang.vercel.app/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          nama: user.namalengkap,
        }),
      });

      if (!response.ok && !response1.ok && !response2.ok && !response3.ok) {
        Swal.fire({
          title: "Pendaftaran Gagal",
          text: "Terjadi kesalahan saat menyetujui pendaftaran.",
          icon: "error",
        });
      }

      // const result = (await response.json()) && (await response1.json()) && (await response2.json()) && (await response3.json());
      Swal.fire({
        title: "Pendaftaran Diterima",
        text: "Pendaftaran berhasil disetujui.",
        icon: "success",
        confirmButtonText: "OK",
      });
      fetchData();
    } catch (error) {
      console.error("Terjadi kesalahan saat menyetujui pendaftaran:", error);
      setError("Gagal menyetujui pendaftaran. Silakan coba lagi.");
    }
  };

  const handleDelete = async (user: DataPendaftaran) => {
    try {
      const response = await fetch(`https://api-jukang.vercel.app/pendaftaran/${user.user_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus pendaftaran.");
      }

      alert("Pendaftaran berhasil dihapus.");
      fetchData(); // Memuat ulang data setelah penghapusan
    } catch (error) {
      alert("Fitur hapus pendaftaran belum tersedia.");
      console.error("Terjadi kesalahan saat menghapus pendaftaran:", error);
      setError("Gagal menghapus pendaftaran. Silakan coba lagi.");
    }
  };

  const handleTolak = async (user: DataPendaftaran) => {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}pendaftaran/update/${user.user_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "ditolak",
        }),
      });

      const response1 = await fetch(`${CONFIG.BASE_URL}email/tolak`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          name: user.namalengkap,
        }),
      });

      if (!response.ok && !response1.ok) {
        Swal.fire({
          title: "Pendaftaran Ditolak",
          text: "Terjadi kesalahan saat menolak pendaftaran.",
          icon: "error",
        });
      }

      Swal.fire({
        title: "Pendaftaran Ditolak",
        text: `PEndafatran di tolak`,
        icon: "success",
        confirmButtonText: "OK",
      });

      fetchData(); // Memuat ulang data setelah penolakan
    } catch (error) {
      console.error("Terjadi kesalahan saat menolak pendaftaran:", error);
      Swal.fire({
        title: "Pendaftaran Ditolak",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full bg-gray-100 font-inter">
        <div className="text-xl font-semibold text-gray-700">Memuat data...</div>
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
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tabel Pendaftaran Pengguna</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">ID Pengguna</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Lengkap</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomor Telepon</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">domisili</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">spesialis</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foto Profil</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foto KTP</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dibuat Pada</th>

              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Diperbarui Pada</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>

              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {registrations.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  <span className="block max-w-[100px] truncate" title={user.user_id}>
                    {user.user_id}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.namalengkap}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.nomortelp}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.domisili}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.spesialis}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  {user.photoprofile ? (
                    <img
                      src={user.photoprofile}
                      alt="Foto Profil"
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
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  {user.photoktp ? (
                    <img
                      src={user.photoktp}
                      alt="Foto KTP"
                      className="w-20 h-auto rounded-md object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/100x60/cccccc/ffffff?text=N/A";
                      }}
                    />
                  ) : (
                    <span className="text-gray-500">Tidak Ada</span>
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  {user.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.deskripsi}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{new Date(user.createdAt).toLocaleString()}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{new Date(user.updatedAt).toLocaleString()}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.status === "belum diverifikasi" ? "bg-yellow-100 text-yellow-800" : ""}
                    ${user.status === "diterima" ? "bg-green-100 text-green-800" : ""}
                    ${user.status === "ditolak" ? "bg-red-100 text-red-800" : ""}
                  `}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 flex gap-3 items-center">
                  <button
                    onClick={() => handlerSetujui(user)}
                    className={`px-3 py-1 rounded-md cursor-pointer text-white text-xs font-medium bg-blue-500 hover:bg-blue-600 transition-colors duration-200`}
                  >
                    Setujui
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    className={`px-3 py-1 rounded-md cursor-pointer text-white text-xs font-medium bg-red-500 hover:bg-red-600 transition-colors duration-200`}
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => handleTolak(user)}
                    className={`px-3 py-1 rounded-md cursor-pointer text-white text-xs font-medium bg-violet-500 hover:bg-violet-600 transition-colors duration-200`}
                  >
                    Tolak
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendaftaranPages;
