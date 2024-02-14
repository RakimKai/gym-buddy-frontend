import { axiosPrivate } from "../../components/Axios/axios";
import { EditUser, User } from "../../types/types";
import { ResponseData } from "../../types/response";

export const getUser = async () => {
  return await axiosPrivate.get<User>("/user/get");
};
export const editUser = async (params: EditUser) => {
  await axiosPrivate.put<ResponseData<User>>("/user/update", params);
};
