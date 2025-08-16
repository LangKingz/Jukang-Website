"use client";

import { DataTransaksi } from "@/model/transaksi";
import React, { useState } from "react";
import Swal from "sweetalert2";

type props = {
  data: DataTransaksi;
  onClose: () => void;
};

const ModalUpdateTrans = ({ data, onClose }: props) => {
  const [formData, setFormData] = useState<DataTransaksi>(data);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleUpdateStatus = async (id: string) => {
    try {
      const response = await fetch(`https://api-jukang.vercel.app/transaksi/update/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status_code: formData.status_code,
        }),
      });

      if (!response.ok) {
        Toast.fire({
          icon: "error",
          title: "Gagal memperbarui status transaksi",
        });

        onClose();
      }
      const result = await response.json();
      console.log("Update result:", result);

      Toast.fire({
        icon: "success",
        title: "Status transaksi berhasil diperbarui",
      });

      onClose();
    } catch (error) {
      console.error("Error updating transaction status:", error);
      alert("Failed to update transaction status.");
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Update Transaksi</h3>
        <p className="py-4">Silakan perbarui informasi transaksi di bawah ini:</p>
        <div className="flex items-center flex-col">
          <input type="text" disabled defaultValue={data.id_transaksi} className="input" />
          <input type="text" disabled defaultValue={data.dataUser.namalengkap} className="input" />
          <input type="text" disabled defaultValue={data.dataTukang.namatukang} className="input" />
          <input type="text" disabled defaultValue={data.dataTukang.spesialis} className="input" />
          <input type="date" disabled defaultValue={data.tanggal} className="input" />
          <select
            defaultValue={data.status_code}
            onChange={(e) => setFormData({ ...formData, status_code: e.target.value })}
            className="select select-primary"
          >
            <option>pending</option>
            <option>diterima</option>
            <option>Selesai</option>
          </select>
          <input type="text" disabled defaultValue={data.metodePembayaran} className="input" />
        </div>

        <div className="modal-action">
          <button type="submit" onClick={() => handleUpdateStatus(data.id_transaksi)} className="btn btn-primary">
            Update Status
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ModalUpdateTrans;
