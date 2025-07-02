import { DataTransaksi } from "@/model/transaksi";
import React from "react";

export type props = {
  data: DataTransaksi;
  onClose: () => void;
  onPrint: () => void;
};

const Modal = ({ data, onClose, onPrint }: props) => {
  // --- Helper buat status biar lebih cakep ---
  const getStatusInfo = (statusCode: string) => {
    switch (statusCode) {
      case "Selesai": // atau status 'selesai' lainnya
        return { text: "Selesai", className: "badge-success text-white" };
      case "Diterima": // atau status 'dibatalkan'
        return { text: "Dibatalkan", className: "badge-error text-white" };
      default:
        return { text: "Dalam Proses", className: "badge-warning text-white" };
    }
  };

  const status = getStatusInfo(data.status_code);
  const formattedDate = new Date(data.tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <dialog id="struk_modal" className="modal modal-bottom sm:modal-middle text-white">
      <div className="modal-box">
        {/* Tombol Close Elegan di Pojok Kanan Atas */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>
          ✕
        </button>

        <h3 className="font-bold text-lg">Detail Transaksi</h3>
        <p className="py-2 text-sm text-base-content/70">ID: {data.id_transaksi}</p>

        {/* --- Info Utama --- */}
        <div className="divider my-1"></div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-base-content/70">Status</span>
            <span className={`badge ${status.className} font-semibold`}>{status.text}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-content/70">Tanggal</span>
            <span className="font-semibold">{formattedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-content/70">Pembayaran</span>
            <span className="font-semibold">{data.metodePembayaran}</span>
          </div>
        </div>

        {/* --- Info Jasa --- */}
        <div className="divider my-1">Info Jasa</div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-base-content/70">Pelanggan</span>
            <span className="font-semibold">{data.dataUser?.namalengkap}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-content/70">Penyedia Jasa</span>
            <span className="font-semibold">
              {data.dataTukang?.namatukang} ({data.dataTukang?.spesialis})
            </span>
          </div>
          <div className="flex justify-between items-start gap-4 ">
            <span className="text-base-content/70 flex-1">Alamat</span>
            <span className="font-semibold text-right w-full truncate ">{data.alamat}</span>
          </div>
        </div>

        {/* --- Rincian Biaya --- */}
        <div className="divider my-1">Rincian</div>
        <div className="bg-base-200/50 p-4 rounded-lg mt-2 space-y-2">
          <p className="text-sm text-base-content/80">{data.deskripsi}</p>
          <div className="flex justify-between items-center pt-2 border-t border-base-content/10">
            <span className="font-bold text-md">Total Biaya</span>
            <span className="font-extrabold text-xl text-primary">{data.dataTukang?.priceRupiah}</span>
          </div>
        </div>

        {/* --- Tombol Aksi --- */}
        <div className="modal-action mt-6">
          <button className="btn btn-ghost" onClick={onClose}>
            Tutup
          </button>
          <button className="btn btn-primary" onClick={onPrint}>
            Cetak Struk
          </button>
        </div>
      </div>
      {/* Klik di luar modal akan menutupnya */}
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
