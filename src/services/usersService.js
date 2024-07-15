import { get, post } from "../utils/request";

export const login = async (email, password) => {
  const result = await get(`users?email=${email}&password=${password}`);
  return result;
}

export const checkExistEmail = async (email) => {
  const result = await get(`users?email=${email}`);
  return result;
}

export const checkExistToken = async (token) => {
  const result = await get(`users?token=${token}`);
  return result;
}

export const register = async (options) => {
  const result = await post("users/", options);
  return result;
}