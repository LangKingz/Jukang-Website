"use client";

import { CONFIG } from "@/hooks/URLBASE";
import { ListUser } from "@/model/user";
import React, { useState } from "react";
import Swal from "sweetalert2";

type props = {
  data: ListUser;
  onClose: () => void;
  onRefresh: () => void;
};

const ModalUpdatePengguna = ({ data, onClose, onRefresh }: props) => {
  const [formData, setFormData] = useState({
    role: data.role,
    isVerified: data.isVerified,
  });

  const handleUpdateStatus = async (data: ListUser) => {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}pengguna/${data.user_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Data updated successfully!",
      });

      onRefresh();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
    }
  };

  return (
    <dialog id="my_modal_3" className="modal sm:modal-middle modal-bottom">
      <div className="modal-box">
        <form method="dialog">
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Update Transaksi</h3>
        <p className="py-4">Silakan perbarui informasi Pengguna di bawah ini: {data.email}</p>
        <div className="flex items-center flex-col">
          <div className="w-full flex flex-col items-center">
            <label htmlFor="role" className="text-start">
              Role
            </label>
            <select
              name="role"
              defaultValue={data.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value || data.role })}
              className="select select-primary"
              required
            >
              <option>admin</option>
              <option>konsumen</option>
              <option>verification</option>
              <option>tukang</option>
            </select>
          </div>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">isVerified</legend>
            <select
              defaultValue={String(data.isVerified)}
              onChange={(e) => setFormData({ ...formData, isVerified: e.target.value === "true" || data.isVerified })}
              className="select select-primary"
            >
              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </fieldset>
        </div>

        <div className="modal-action">
          <button type="submit" onClick={() => handleUpdateStatus(data)} className="btn btn-primary">
            Update Status
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ModalUpdatePengguna;
