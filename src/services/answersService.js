import { get, post } from "../utils/request"

export const getAnswersByUserID = async (userId) => {
  const result = await get(`answers?userId=${userId}`);
  return result;
}

export const getAnswerByID = async (id) => {
  const result = await get(`answers/${id}`);
  return result;
}

export const createAnswer = async (options) => {
  const result = await post("answers/", options);
  return result;
}