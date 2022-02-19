import { AxiosRequestConfig, AxiosResponse } from "axios";

interface Iinterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (err: any) => any;
}

interface IMainAxiosConfig extends AxiosRequestConfig {
  interceptor?: Iinterceptor;
  isShowLoading?: boolean;
}

interface IrequestData {
  data: any;
  returnCode: string;
  success: boolean;
}

export { IMainAxiosConfig, Iinterceptor, IrequestData };
