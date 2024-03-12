export interface RegisterRequest {
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}

export interface LoginRequest {
  email?: string;
  password?: string;
}

export interface EditUser {
  name?: string;
  email?: string;
  image?: File | string;
  date_of_birth?: string;
  phone_number?: string;
  current_password?: string;
  new_password?: string;
}

export interface User {
  name: string;
  email: string;
  image: string;
  phone_number: string;
  date_of_birth: string;
  role: string;
}
export interface UserApiResponse {
  status: string;
  message: string;
  data: {
    user: User;
  };
}
export interface Membership {
  id: string;
  member: User;
  employee: User;
  amount: string;
  created_at: string;
  updated_at: string;
}
export interface UpdateMembership {
  membership_id?: string;
  created_at: string;
}

export interface RemoveMembership {
  membership_id?: string;
}
export interface SearchMemberships {
  name?: string;
}

export interface MemberShipsApiResponse {
  status: string;
  message: string;
  data: {
    membership: Membership;
  };
}

export interface NewPost {
  title?: string;
  content?: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user: User;
}
