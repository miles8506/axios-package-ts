import { MSaxios } from "./request";

export const MSrequest = new MSaxios({
  /* for vue */
  // baseURL: process.env.VUE_APP_BASE_URL,
  // timeout: process.env.VUE_APP_TIMEOUT as any as number,
  
  baseURL: 'http://123.207.32.32:8000/',
  timeout: 10000,
});
