import { Tukang } from "@/model/tukang";
import { Star } from "lucide-react";
import React from "react";

type props = {
  tukang: Tukang; // Ganti dengan tipe data yang sesuai
  onClose: () => void;
};

const   ModalTukang = ({ tukang, onClose }: props) => {
  return (
    <dialog id="detail_tukang_modal" className="modal modal-bottom sm:modal-middle  text-white">
      <div className="modal-box w-1/2">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10" onClick={onClose}>
          ✕
        </button>

        {/* --- Header Profil --- */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={tukang.photoUrl} alt={`Foto profil ${tukang.namatukang}`} />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold">{tukang.namatukang}</h3>
            <span className="badge badge-primary mt-1">{tukang.spesialis}</span>
            <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span className="font-bold">{tukang.totalReviewRating.toFixed(1)}</span>
              <span className="text-sm text-base-content/70">({tukang.reviewCount} ulasan)</span>
            </div>
          </div>
        </div>

        {/* --- Deskripsi & Domisili --- */}
        <div className="divider">Tentang</div>
        <p className="text-sm text-base-content/80 w-60">{tukang.deskripsi}</p>
        <p className="text-sm mt-2">
          <strong>Domisili:</strong> {tukang.domisili}
        </p>

        {/* --- Portofolio --- */}
        {tukang.portofolio && tukang.portofolio.length > 0 && (
          <>
            <div className="divider">Portofolio</div>
            <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
              {tukang.portofolio.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <img src={item.gambar} className="rounded-box h-40" alt={item.deskripsi} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* --- Jadwal Kerja --- */}
        <div className="divider">Jadwal Kerja</div>
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          {Object.entries(tukang.jadwal).map(([hari, jam]) => (
            <div key={hari} className="p-2 bg-base-200 rounded-md">
              <p className="capitalize font-semibold">{hari}</p>
              <p className={jam.toLowerCase() === "tutup" ? "text-error" : "text-success"}>{jam}</p>
            </div>
          ))}
        </div> */}

        {/* --- Ulasan Unggulan --- */}
        {tukang.review && (
          <>
            <div className="divider">Ulasan Unggulan</div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-secondary">{tukang.review}</div>
            </div>
          </>
        )}

        {/* --- Aksi --- */}
        <div className="modal-action mt-6 flex-col sm:flex-row items-center gap-4">
          <div className="text-lg font-bold text-primary sm:mr-auto">{tukang.priceRupiah}</div>
          <button className="btn btn-ghost" onClick={onClose}>
            Tutup
          </button>
          <button className="btn btn-primary" onClick={() => console.log("Pesan Sekarang")} disabled={tukang.booked}>
            {tukang.booked ? "Sudah Dipesan" : "Pesan Sekarang"}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default ModalTukang;
