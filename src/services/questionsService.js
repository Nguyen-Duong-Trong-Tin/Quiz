import { get } from "../utils/request";

export const getQuestionsByTopicID = async (id) => {
  const result = await get(`questions?topicId=${id}`);
  return result;
}