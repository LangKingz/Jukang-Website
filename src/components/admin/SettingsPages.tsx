"use client";

import { CONFIG } from "@/hooks/URLBASE";
import { ListUser, UserResponse } from "@/model/user";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SettingsPages: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<ListUser[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${CONFIG.BASE_URL}register`, {
        method: "GET",
      });

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! ",
        });
      }

      const data = (await response.json()) as UserResponse;
      setUser(data.listUser);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setUser([]);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (userId: string) => {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}pengguna/hapus/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }

      const data = await response.json();
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: data.message,
      });
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tabel Pendaftaran Pengguna</h2>

      {/* Wrapper untuk scrolling di layar kecil */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Foto
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama Lengkap
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Dibuat
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Jika tidak ada user, tampilkan pesan */}
            {user.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-sm text-gray-500">
                  Tidak ada data pengguna untuk ditampilkan.
                </td>
              </tr>
            ) : (
              user.map((user) => (
                <tr key={user.user_id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={user.photoprofile}
                      alt={`Foto profil ${user.namalengkap}`}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/40x40/EBF4FF/3B82F6?text=${user.namalengkap.charAt(0)}`;
                      }}
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.namalengkap}</div>
                    <div className="text-xs text-gray-500 truncate max-w-[120px]" title={user.user_id}>
                      {user.user_id}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{user.role}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {user.isVerified ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Terverifikasi</span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">{formatDate(user.createdAt)}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200" title="Setujui Pengguna">
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(user.user_id)}
                        className="text-red-600 hover:text-red-900 transition-colors duration-200"
                        title="Hapus Pengguna"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettingsPages;
