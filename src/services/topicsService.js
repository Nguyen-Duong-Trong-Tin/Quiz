import { get } from "../utils/request"

export const getTopics = async (id = "") => {
  const pId = id === "" ? "" : `id=${id}`;

  const result = await get(`topics?${pId}`);
  return result;
}