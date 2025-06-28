// import React from "react";

// const Modal = () => {
//   return (
//     <dialog id="my_modal_3" className="modal">
//       <div className="modal-box">
//         <form method="dialog">
//           {/* Form Fields */}
//           <div className="space-y-4">
//             {/* ID Transaksi */}
//             <div>
//               <label htmlFor="id_transaksi" className="block text-sm font-medium text-gray-700 mb-1">
//                 ID Transaksi
//               </label>
//               <input
//                 type="text"
//                 id="id_transaksi"
//                 name="id_transaksi"
//                 value={formData?.id_transaksi || ""}
//                 className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                 placeholder="TRX-XXXX-XXX"
//                 required
//               />
//             </div>

//             {/* Nama Tukang */}
//             <div>
//               <label htmlFor="namatukang" className="block text-sm font-medium text-gray-700 mb-1">
//                 Nama Tukang
//               </label>
//               <input
//                 type="text"
//                 id="namatukang"
//                 name="namatukang"
//                 value={formData?.namatukang || ""}
//                 className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                 placeholder="Nama Lengkap Tukang"
//                 required
//               />
//             </div>

//             {/* Alamat */}
//             <div>
//               <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
//                 Alamat
//               </label>
//               <textarea
//                 id="alamat"
//                 name="alamat"
//                 value={formData?.alamat || ""}
//                 rows={3}
//                 className="textarea textarea-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-y"
//                 placeholder="Alamat lokasi pekerjaan"
//                 required
//               ></textarea>
//             </div>

//             {/* Deskripsi */}
//             <div>
//               <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700 mb-1">
//                 Deskripsi Pekerjaan
//               </label>
//               <textarea
//                 id="deskripsi"
//                 name="deskripsi"
//                 value={formData?.deskripsi || ""}
//                 rows={4}
//                 className="textarea textarea-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-y"
//                 placeholder="Detail pekerjaan yang dilakukan"
//                 required
//               ></textarea>
//             </div>

//             {/* Metode Pembayaran */}
//             <div>
//               <label htmlFor="metodePembayaran" className="block text-sm font-medium text-gray-700 mb-1">
//                 Metode Pembayaran
//               </label>
//               <select
//                 id="metodePembayaran"
//                 name="metodePembayaran"
//                 value={formData?.metodePembayaran || ""}
//                 className="select select-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                 required
//               >
//                 <option value="">Pilih Metode Pembayaran</option>
//                 <option value="Tunai">Tunai</option>
//                 <option value="Transfer Bank">Transfer Bank</option>
//                 <option value="QRIS">QRIS</option>
//               </select>
//             </div>

//             {/* Total */}
//             <div>
//               <label htmlFor="total" className="block text-sm font-medium text-gray-700 mb-1">
//                 Total Biaya (Rp)
//               </label>
//               <input
//                 type="number"
//                 id="total"
//                 name="total"
//                 value={formData?.total || ""}
//                 className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                 placeholder="Contoh: 500000"
//                 min="0"
//                 required
//               />
//             </div>

//             {/* Tanggal */}
//             <div>
//               <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700 mb-1">
//                 Tanggal Transaksi
//               </label>
//               <input
//                 type="date"
//                 id="tanggal"
//                 name="tanggal"
//                 value={formData?.tanggal || ""}
//                 className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end pt-4">
//               <button
//                 type="submit"
//                 onClick={(e) => {
//                   handleUpdate(e as unknown as DataTransaksi);
//                 }}
//                 className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300"
//               >
//                 Simpan Transaksi
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </dialog>
//   );
// };

// export default Modal;
