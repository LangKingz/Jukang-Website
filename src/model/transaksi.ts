export interface TransaksiResponse {
  status: string;
  data: DataTransaksi[];
}

export interface DataTransaksi {
  id_transaksi: string;
  user_id: string;
  namalengkap: string;
  namatukang: string;
  tukang_id: string;
  spesialis: string;
  domisili: string;
  deskripsi: string;
  tanggal: string;
  alamat: string;
  status_code: string;
  metodePembayaran: string;
  total: string;
  photoprofile: string;
  lat: string;
  long: string;
  nomor_telpon: string;
  createdAt: string;
}