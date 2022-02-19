import { MSrequest } from "./service/index";
// import "element-plus/dist/index.css";
import type { IrequestData } from "./service/type/type";
/* 
  MSrequest.request<IrequestData>({
  url: "/home/multidata",
  method: "GET",
  interceptor: {
    responseInterceptor(res) {
      return res.data;
    },
  },
  isShowLoading: false,
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
*/
MSrequest.request<IrequestData>({
  url: "/home/multidata",
  method: "GET",
  interceptor: {
    responseInterceptor(res:any) {
      return res.data;
    },
  },
  isShowLoading: false,
})
  .then((res:any) => {
    console.log(res);
  })
  .catch((err:any) => {
    console.log(err);
  });