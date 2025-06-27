'use client'

import { PendaftaranResponse } from "@/model/pendaftaran";
import { TransaksiResponse } from "@/model/transaksi";
import { TukangApiResponse } from "@/model/tukang";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// --- Komponen Placeholder untuk halaman lain ---
const DashboardPages: React.FC = () => {
  // Mock data untuk metrik dasbor
  const [dashboardMetrics, setDashboardMetrics] = useState({
    totalPendaftar: 0,
    totalTukang: 0,
    tukangTersedia: 0,
    totalTransaksi: 0, // Metrik baru
  });
  const [loadingMetrics, setLoadingMetrics] = useState<boolean>(true);
  const [errorMetrics, setErrorMetrics] = useState<string | null>(null);

   // Mock data for charts (replace with real data fetching if available)
  const pendaftarPerBulanData = [
    { name: 'Jan', pendaftar: 400 },
    { name: 'Feb', pendaftar: 300 },
    { name: 'Mar', pendaftar: 200 },
    { name: 'Apr', pendaftar: 278 },
    { name: 'Mei', pendaftar: 189 },
    { name: 'Jun', pendaftar: 239 },
    { name: 'Jul', pendaftar: 349 },
  ];

  const spesialisTukangData = [
    { name: 'Instalasi Listrik', value: 400, color: '#0088FE' },
    { name: 'Reparasi Atap', value: 300, color: '#00C49F' },
    { name: 'Reparasi Saluran Air', value: 300, color: '#FFBB28' },
    { name: 'Lantai & Dinding', value: 200, color: '#FF8042' },
    { name: 'Reparasi Aksesoris', value: 278, color: '#8884d8' },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoadingMetrics(true);
        setErrorMetrics(null);

        // Ambil data pendaftaran
        const pendaftaranResponse = await fetch(`https://api-jukang.vercel.app/pendaftaran/semua`);
        const pendaftaranData: PendaftaranResponse = await pendaftaranResponse.json();
        const totalPendaftar = pendaftaranData.data ? pendaftaranData.data.length : 0;

        // Ambil data tukang
        const tukangResponse = await fetch(`https://api-jukang.vercel.app/tukang`);
        const tukangData: TukangApiResponse = await tukangResponse.json();
        const totalTukang = tukangData.tukang ? tukangData.tukang.length : 0;
        const tukangTersedia = tukangData.tukang ? tukangData.tukang.filter(t => !t.booked).length : 0;

        // Ambil data transaksi (asumsi ada endpoint /transaksi/semua)
        const transaksiResponse = await fetch(`https://api-jukang.vercel.app/transaksi/semua`);
        const transaksiApiData: TransaksiResponse = await transaksiResponse.json(); // Menggunakan any karena struktur belum pasti
        const totalTransaksi = transaksiApiData.data ? transaksiApiData.data.length : 0;

        setDashboardMetrics({
          totalPendaftar,
          totalTukang,
          tukangTersedia,
          totalTransaksi
        });
      } catch (err) {
        console.error("Gagal mengambil metrik dashboard:", err);
        setErrorMetrics("Gagal memuat metrik dashboard.");
      } finally {
        setLoadingMetrics(false);
      }
    };

    fetchMetrics();
  }, []); // Efek hanya berjalan sekali saat komponen di-mount

  if (loadingMetrics) {
    return (
      <div className="flex justify-center items-center h-full bg-white shadow-lg rounded-xl p-6">
        <div className="text-xl font-semibold text-gray-700">Memuat metrik dasbor...</div>
      </div>
    );
  }

  if (errorMetrics) {
    return (
      <div className="flex justify-center items-center h-full bg-red-100 shadow-lg rounded-xl p-6">
        <div className="text-xl font-semibold text-red-700">{errorMetrics}</div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard Admin</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card Total Pendaftar */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <div className="text-sm font-medium opacity-80">Total Pendaftar</div>
            <div className="text-4xl font-bold">{dashboardMetrics.totalPendaftar}</div>
          </div>
          <svg className="w-10 h-10 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a4 4 0 014-4h2.5M15 9a3 3 0 11-6 0 3 3 0 016 0zm-6 0a6 6 0 00-9 0h9V9z"></path></svg>
        </div>

        {/* Card Total Tukang */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <div className="text-sm font-medium opacity-80">Total Tukang</div>
            <div className="text-4xl font-bold">{dashboardMetrics.totalTukang}</div>
          </div>
          <svg className="w-10 h-10 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253M12 6.253c1.168-.776 2.754-1.253 4.5-1.253s3.332.477 4.5 1.253m-12 5.41a3.75 3.75 0 100 7.5m0-7.5l-2.25 2.25M12 12.253l-2.25 2.25m2.25-2.25l2.25 2.25m0 0l2.25 2.25M12 14.5a3.75 3.75 0 100 7.5M12 14.5c1.168.776 2.754 1.253 4.5 1.253s3.332-.477 4.5-1.253"></path></svg>
        </div>

        {/* Card Tukang Tersedia */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <div className="text-sm font-medium opacity-80">Tukang Tersedia</div>
            <div className="text-4xl font-bold">{dashboardMetrics.tukangTersedia}</div>
          </div>
          <svg className="w-10 h-10 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>

        {/* Card Total Transaksi */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <div className="text-sm font-medium opacity-80">Total Transaksi</div>
            <div className="text-4xl font-bold">{dashboardMetrics.totalTransaksi}</div>
          </div>
          <svg className="w-10 h-10 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10v11h18V10M3 10l9-7 9 7M3 10l-2 2m2-2h18M11 15h2m-2 4h2"></path></svg>
        </div>
      </div>

      {/* Bagian Grafik */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grafik Pendaftar per Bulan */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Pendaftar Baru per Bulan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pendaftarPerBulanData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" stroke="#555" />
              <YAxis stroke="#555" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="pendaftar" fill="#8884d8" name="Jumlah Pendaftar" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik Distribusi Spesialis Tukang */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Distribusi Spesialis Tukang</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={spesialisTukangData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
              >
                {spesialisTukangData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};


export default DashboardPages;
