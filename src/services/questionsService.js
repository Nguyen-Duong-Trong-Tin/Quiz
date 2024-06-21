import { get } from "../utils/request";

export const getQuestions = async (id) => {
  const result = await get(`questions?topicId=${id}`);
  return result;
}