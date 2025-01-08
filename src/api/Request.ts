import { axiosInstance } from "@/lib/axios";
import { type AxiosRequestConfig } from "axios";

export class Request {
  get = async <RequestParams, ResponseData>(
    url: string,
    params?: RequestParams
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      url,
      params,
      method: "GET",
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  post = async <RequestData, ResponseData>(
    url: string,
    data: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      url,
      data,
      method: "POST",
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  patch = async <RequestData, ResponseData>(
    url: string,
    data: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      url,
      data,
      method: "PATCH",
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  delete = async <RequestData, ResponseData>(
    url: string,
    data?: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      url,
      data,
      method: "DELETE",
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  put = async <RequestData, ResponseData>(
    url: string,
    data?: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      url,
      data,
      method: "PUT",
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };
}
