import { Iinterceptor } from "../type/type";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export function useInterceptor(
  instance: AxiosInstance,
  interceptor?: Iinterceptor
): void {
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
    (err: any) => {
      console.log(err);
    }
  );
  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      return res.data;
    },
    (err: any) => {
      console.log(err);
    }
  );

  instance.interceptors.request.use(
    interceptor?.requestInterceptor,
    interceptor?.requestInterceptorCatch
  );
  instance.interceptors.response.use(
    interceptor?.responseInterceptor,
    interceptor?.responseInterceptorCatch
  );
}
