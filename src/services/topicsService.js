import { get } from "../utils/request"

export const getTopics = async () => {
  const result = await get("topics");
  return result;
}

export const getTopicByID = async (id) => {
  const result = await get(`topics/${id}`);
  return result;
}