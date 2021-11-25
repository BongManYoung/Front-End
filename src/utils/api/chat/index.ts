import request from "../";

export const chatRequest = (storeId: number, url: string) => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  if (token) {
    return request({
      url: `/${storeId}/${url}`,
      method: "get",
      headers: {
        Authorization: token,
      },
    });
  } else {
    return request({
      url: `/${storeId}/${url}`,
      method: "get",
    });
  }
};

export const randomMenuRequest = (storeId: number, message: string) => {
  return request({
    url: `/${storeId}/random-menu/${message}`,
    method: "get",
  });
};
