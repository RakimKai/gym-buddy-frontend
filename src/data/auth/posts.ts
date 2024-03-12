import apiClient from "../../components/Axios/axios";
import { NewPost } from "../../types/types";

export const createPost = async (params: NewPost) => {
  return await apiClient.post("/posts", params);
};

export const getPosts = async () => {
  return await apiClient.get("/getAllPosts");
};

export const deletePost = async (params?: string) => {
  return await apiClient.delete(`/posts/${params}`);
};
