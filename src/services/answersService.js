import { get, post } from "../utils/request"

export const getAnswers = async (userId) => {
  const result = await get(`answers?userId=${userId}`);
  return result;
}

export const getAnswer = async (id) => {
  const result = await get(`answers/${id}`);
  return result;
}

export const postAnswer = async (options) => {
  const result = await post("answers/", options);
  return result;
}