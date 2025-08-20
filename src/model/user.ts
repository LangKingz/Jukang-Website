export interface UserResponse {
  status: string;
  listUser: ListUser[];
}

export interface ListUser {
  user_id: string;
  namalengkap: string;
  email: string;
  password: string;
  isVerified: boolean;
  role: string;
  multiRole: boolean;
  photoprofile: string;
  createdAt: string;
  updatedAt: string;
}
