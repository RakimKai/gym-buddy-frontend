import apiClient from "../../components/Axios/axios";
import {
  EditUser,
  LoginRequest,
  RegisterRequest,
  User,
  UserApiResponse,
} from "../../types/types";
import { ResponseData } from "../../types/response";

export const getUser = async () => {
  return await apiClient.get<UserApiResponse>("/user/get");
};
export const editUser = async (params: EditUser) => {
  const formData = new FormData();
  params.image && formData.append("image", params.image);
  formData.append("_method", "put");
  const { data } = await apiClient.post<ResponseData<User>>(
    "/user/update",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return data;
};

export const loginUser = async (params: LoginRequest) => {
  return await apiClient.post("/login", params);
};
export const logoutUser = async () => {
  return await apiClient.post("/user/logout");
};

export const registerUser = async (params: RegisterRequest) => {
  return await apiClient.post("/register", params);
};
