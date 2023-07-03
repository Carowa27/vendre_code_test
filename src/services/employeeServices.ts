import axios from "axios";
import { IApiResponse } from "../models/IApiResponse";
import { IEmployee } from "../models/IEmployee";

const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const getEmployees = async (url: string): Promise<IEmployee[]> => {
  try {
    const response = await get<IApiResponse>(url);
    return response.data.data;
  } catch (error) {
    console.error("Something went wrong", error);

    return [];
  }
};
