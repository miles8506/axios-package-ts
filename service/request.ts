import axios from "axios";
// import { ElLoading } from "element-plus";

import { useInterceptor } from "./hook/use-interceptor";

import type { AxiosInstance } from "axios";
import type { IMainAxiosConfig, Iinterceptor } from "./type/type";

class MSaxios {
  instance: AxiosInstance;
  interceptor?: Iinterceptor;
  loading: any;
  isShowLoading: boolean;
  constructor(config: IMainAxiosConfig) {
    // init
    this.instance = axios.create(config);
    this.interceptor = config.interceptor;
    this.isShowLoading = true;

    // interceptor
    useInterceptor(this.instance, this.interceptor);
  }

  request<T>(config: IMainAxiosConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptor?.requestInterceptor) {
        this.instance.interceptors.request.use(
          config.interceptor.requestInterceptor
        );
      }
      
      /* for vue */
      // if (config.isShowLoading) {
      //   this.loading = ElLoading.service({
      //     lock: true,
      //     text: "Loading",
      //     background: "rgba(0, 0, 0, 0.7)",
      //   });
      // }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptor?.responseInterceptor) {
            this.instance.interceptors.response.use(
              config.interceptor.responseInterceptor
            );
          }

          /* for vue */
          // if (config.isShowLoading) this.loading.close();
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T>(config: IMainAxiosConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'GET' });
  }

  post<T>(config: IMainAxiosConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'POST' });
  }
}

export { MSaxios };
