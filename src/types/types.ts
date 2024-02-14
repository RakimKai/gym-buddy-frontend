export interface RegisterRequest {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  password_confirmation: string | undefined;
}

export interface LoginRequest {
  email: string | undefined;
  password: string | undefined;
}

export interface EditUser {
  name?: string;
  email?: string;
  date_of_birth?: string;
  phone_number?: string;
  current_password?: string;
  new_password?: string;
}

export interface User {
  name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
}
