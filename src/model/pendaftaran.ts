export interface PendaftaranResponse {
  message: string;
  data: DataPendaftaran[];
}

export interface DataPendaftaran {
  id: string;
  user_id: string;
  namalengkap: string;
  domisili: string;
  nomortelp: string;
  spesialis:string;
  photoprofile: string;
  createdAt: string;
  email: string;
  status: string;
  updatedAt: string;
  photoktp: string;
}

