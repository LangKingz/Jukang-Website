export interface UserResponse {
  status: string;
  listUser: ListUser[];
}

export interface ListUser {
  user_id: string;
  uid_google: string;
  namalengkap: string;
  nomortelp: string;
  email: string;
  password: string;
  role: string;
  photoprofile: string;
  createdAt: string;
  updatedAt: string;
}
