export interface Tukang {
  tukang_id: string;
  namatukang: string;
  dataPribadi: DataPribadi;
  email: string;
  spesialis: string;
  price: number;
  nomor_telpon: string;
  dokumen: Dokumen;
  photoUrl: string;
  harga: Harga;
  lokasi: Lokasi;
  deskripsi: string;
  jadwal: Jadwal;
  portofolio: Portofolio[];
  priceRupiah: string;
  domisili: string;
  lat: number;
  lon: number;
  // ulasan: any[];
  createdAt: string;
  updatedAt: string;
  booked: boolean;
  totalReviewRating: number;
  reviewCount: number;
  review: string;
}

interface Portofolio {
  gambar: string;
  deskripsi: string;
}

interface Jadwal {
  senin: string;
  selasa: string;
  rabu: string;
  kamis: string;
  jumat: string;
  sabtu: string;
  minggu: string;
}

interface Lokasi {
  lat: number;
  lon: number;
}

interface Harga {
  rupiah: string;
  satuan: string;
  nominal: number;
}

interface Dokumen {
  ktp: string;
  sim: string;
  npwp: string;
  kk: string;
}

interface DataPribadi {
  nama: string;
  email: string;
  tanggal_lahir: string;
  domisili: string;
  alamat: string;
  nomor_telpon: string;
}

export interface TukangApiResponse {
  status: string;
  count: number;
  tukang: Tukang[];
}

// {
//   "status": "success",
//   "count": 1,
//   "tukang": [
//     {
//       "tukang_id": "c681b4fd-8d32-4a3b-9fcc-6168f0ba2003",
//       "namatukang": "Budi Tukang Atap",
//       "dataPribadi": {
//         "nama": "Budi Tukang Atap",
//         "email": "Budi Tukang Atap@mail.com",
//         "tanggal_lahir": "",
//         "domisili": "Kecamatan Pontianak Kota",
//         "alamat": "",
//         "nomor_telpon": ""
//       },
//       "email": "Budi Tukang Atap@mail.com",
//       "spesialis": "Reparasi lantai dan dinding",
//       "price": 143473,
//       "nomor_telpon": "",
//       "dokumen": {
//         "ktp": "https://i.pravatar.cc/300?img=16",
//         "sim": "https://i.pravatar.cc/300?img=16",
//         "npwp": "https://i.pravatar.cc/300?img=16",
//         "kk": "https://i.pravatar.cc/300?img=16"
//       },
//       "photoUrl": "https://i.pravatar.cc/300?img=16",
//       "harga": {
//         "rupiah": "Rp 143.473,00",
//         "satuan": "hari",
//         "nominal": 143473
//       },
//       "lokasi": {
//         "lat": -0.0333,
//         "lon": 109.3333
//       },
//       "deskripsi": "Nama saya Budi Tukang Atap, seorang Reparasi lantai dan dinding berpengalaman yang berdedikasi untuk memberikan layanan berkualitas tinggi. Dengan latar belakang selama [Jumlah] tahun di bidang ini, saya berkomitmen untuk memberikan hasil yang tahan lama dan dieksekusi dengan baik.",
//       "jadwal": {
//         "senin": "08:00 - 17:00",
//         "selasa": "08:00 - 17:00",
//         "rabu": "08:00 - 17:00",
//         "kamis": "08:00 - 17:00",
//         "jumat": "08:00 - 17:00",
//         "sabtu": "08:00 - 17:00",
//         "minggu": "Libur"
//       },
//       "portofolio": [
//         {
//           "gambar": "https://i.pravatar.cc/300?img=16",
//           "deskripsi": "Ini adalah gambar portofolio pertama"
//         }
//       ],
//       "priceRupiah": "Rp 143.473,00",
//       "domisili": "Kecamatan Pontianak Kota",
//       "lat": -0.0333,
//       "lon": 109.3333,
//       "ulasan": [],
//       "createdAt": "2025-07-01T06:23:08.257Z",
//       "updatedAt": "2025-07-01T06:23:08.257Z",
//       "booked": true,
//       "totalReviewRating": 9.6,
//       "reviewCount": 2,
//       "review": "4.8"
//     }
//   ]
// }