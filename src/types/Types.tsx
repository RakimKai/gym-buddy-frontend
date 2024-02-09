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
