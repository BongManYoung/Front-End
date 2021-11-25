import request from "../";

export const chatRequest = (storeId: number, url: string) => {
  return request({
    url: `/${storeId}/${url}`,
    method: "get",
  });
};
