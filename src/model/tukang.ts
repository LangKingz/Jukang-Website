export interface Tukang {
  tukang_id: string;
  namatukang: string;
  spesialis: string;
  photoUrl: string;
  priceRupiah: string;
  domisili: string;
  lat: number;
  lon: number;
  review: string;
  totalReviewRating: number;
  booked: boolean;
  reviewCount: number;
  nomor_telpon?: string; // Menambahkan ini berdasarkan handler.js Anda
}

export interface TukangApiResponse {
  status: string;
  count: number;
  tukang: Tukang[];
}