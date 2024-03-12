import apiClient from "../../components/Axios/axios";
import {
  Membership,
  RemoveMembership,
  SearchMemberships,
  UpdateMembership,
} from "../../types/types";
import { ResponseData } from "../../types/response";

export const getMemberships = async () => {
  return await apiClient.get("/getAllByMember");
};

export const getAllMemberships = async () => {
  return await apiClient.get("/getAllMemberships");
};

export const updateMembership = async (params: UpdateMembership) => {
  return await apiClient.put<ResponseData<Membership>>(
    `/memberships/${params.membership_id}`,
    params
  );
};

export const removeMembership = async (params: RemoveMembership) => {
  return await apiClient.delete(`/memberships/${params.membership_id}`);
};

export const searchMemberships = async (params: SearchMemberships) => {
  return await apiClient.post("/search", params);
};
