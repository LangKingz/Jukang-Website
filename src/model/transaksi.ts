export interface TransaksiResponse {
  status: string;
  data: DataTransaksi[];
}

export interface DataTransaksi {
  id_transaksi: string;
  user_id: string;
  tukang_id: string;
  dataUser: DataUser;
  dataTukang: DataTukang;
  domisili: string;
  deskripsi: string;
  tanggal: string;
  alamat: string;
  status_code: string;
  metodePembayaran: string;
  photoprofile: string;
  lat: string;
  long: string;
  nomor_telpon: string;
  createdAt: string;
}

interface DataTukang {
  tukang_id: string;
  namatukang: string;
  dataPribadi: DataPribadi;
  email: string;
  spesialis: string;
  review: number;
  price: number;
  reviewCount: number;
  nomor_telpon: string;
  totalReviewRating: number;
  booked: boolean;
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

interface DataUser {
  user_id: string;
  uid_google: string;
  namalengkap: string;
  nomortelp: string;
  email: string;
  password: string;
  photoprofile: string;
  createdAt: string;
  updatedAt: string;
  role: string;
}

// interface DataType {
//   type: string;
//   item: string;
// }


// {
//   "status": "success",
//   "dataType": {
//     "type": "array",
//     "item": "object"
//   },
//   "message": "Berhasil mengambil riwayat transaksi",
//   "count": 1,
//   "data": [
//     {
//       "id_transaksi": "b4c68497-c753-4a1d-b161-8135b362171a",
//       "user_id": "ca9929a8-a92e-4544-822c-e70fe8b6dc91",
//       "tukang_id": "c681b4fd-8d32-4a3b-9fcc-6168f0ba2003",
//       "dataUser": {
//         "user_id": "ca9929a8-a92e-4544-822c-e70fe8b6dc91",
//         "uid_google": "",
//         "namalengkap": "Gilang Arya Libna",
//         "nomortelp": "",
//         "email": "gilanglibna@gmail.com",
//         "password": "",
//         "photoprofile": "https://lh3.googleusercontent.com/a/ACg8ocIe3rpCqDvNUE0lBoSi9uqSOZXfctWzUqWvkC8ZNDlKIpF2DYQy=s96-c",
//         "createdAt": "2025-06-26T05:49:03.300Z",
//         "updatedAt": "2025-06-26T05:49:03.300Z",
//         "role": "pengguna"
//       },
//       "dataTukang": {
//         "tukang_id": "c681b4fd-8d32-4a3b-9fcc-6168f0ba2003",
//         "namatukang": "Budi Tukang Atap",
//         "dataPribadi": {
//           "nama": "Budi Tukang Atap",
//           "email": "Budi Tukang Atap@mail.com",
//           "tanggal_lahir": "",
//           "domisili": "Kecamatan Pontianak Kota",
//           "alamat": "",
//           "nomor_telpon": ""
//         },
//         "email": "Budi Tukang Atap@mail.com",
//         "spesialis": "Reparasi lantai dan dinding",
//         "review": 4.8,
//         "price": 143473,
//         "reviewCount": 1,
//         "nomor_telpon": "",
//         "totalReviewRating": 4.8,
//         "booked": false,
//         "dokumen": {
//           "ktp": "https://i.pravatar.cc/300?img=16",
//           "sim": "https://i.pravatar.cc/300?img=16",
//           "npwp": "https://i.pravatar.cc/300?img=16",
//           "kk": "https://i.pravatar.cc/300?img=16"
//         },
//         "photoUrl": "https://i.pravatar.cc/300?img=16",
//         "harga": {
//           "rupiah": "Rp 143.473,00",
//           "satuan": "hari",
//           "nominal": 143473
//         },
//         "lokasi": {
//           "lat": -0.0333,
//           "lon": 109.3333
//         },
//         "deskripsi": "Nama saya Budi Tukang Atap, seorang Reparasi lantai dan dinding berpengalaman yang berdedikasi untuk memberikan layanan berkualitas tinggi. Dengan latar belakang selama [Jumlah] tahun di bidang ini, saya berkomitmen untuk memberikan hasil yang tahan lama dan dieksekusi dengan baik.",
//         "jadwal": {
//           "senin": "08:00 - 17:00",
//           "selasa": "08:00 - 17:00",
//           "rabu": "08:00 - 17:00",
//           "kamis": "08:00 - 17:00",
//           "jumat": "08:00 - 17:00",
//           "sabtu": "08:00 - 17:00",
//           "minggu": "Libur"
//         },
//         "portofolio": [
//           {
//             "gambar": "https://i.pravatar.cc/300?img=16",
//             "deskripsi": "Ini adalah gambar portofolio pertama"
//           }
//         ],
//         "priceRupiah": "Rp 143.473,00",
//         "domisili": "Kecamatan Pontianak Kota",
//         "lat": -0.0333,
//         "lon": 109.3333,
//         "ulasan": [],
//         "createdAt": "2025-07-01T06:23:08.257Z",
//         "updatedAt": "2025-07-01T06:23:08.257Z"
//       },
//       "domisili": "Kecamatan Pontianak Kota",
//       "deskripsi": "Lantai",
//       "tanggal": "1-7-2025",
//       "alamat": "Gg. Sentosa Dalam No.3, Sungai Bangkong, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78116, Indonesia",
//       "status_code": "pending",
//       "metodePembayaran": "Tunai",
//       "photoprofile": "https://lh3.googleusercontent.com/a/ACg8ocIe3rpCqDvNUE0lBoSi9uqSOZXfctWzUqWvkC8ZNDlKIpF2DYQy=s96-c",
//       "lat": "-0.0391951",
//       "long": "109.323312",
//       "nomor_telpon": "081346267655",
//       "createdAt": "2025-07-01T07:04:57.514Z"
//     }
//   ]
// }