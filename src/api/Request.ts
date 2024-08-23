import { axiosInstance } from "@/lib/axios";
import { type AxiosRequestConfig } from "axios";

export class Request {
  get = async <RequestParams, ResponseData>(
    url: string,
    params?: RequestParams
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      method: "GET",
      url,
      params,
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  post = async <RequestData, ResponseData>(
    url: string,
    data: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      method: "POST",
      url,
      data,
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  patch = async <RequestData, ResponseData>(
    url: string,
    data: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      method: "PATCH",
      url,
      data,
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  delete = async <RequestData, ResponseData>(
    url: string,
    data?: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      method: "DELETE",
      url,
      data,
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };

  put = async <RequestData, ResponseData>(
    url: string,
    data?: RequestData
  ): Promise<ResponseData> => {
    const requestConfig: AxiosRequestConfig = {
      method: "PUT",
      url,
      data,
    };

    const response = await axiosInstance(requestConfig);
    return response.data;
  };
}
