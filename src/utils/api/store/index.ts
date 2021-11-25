import request from "../index";

export const getStoreList = async () => {
  return await request({
    url: "/store/list",
    method: "get",
  });
};

export const getStoreDetail = async (id: number | any) => {
  return await request({
    url: `/store/${id}`,
    method: "get",
  });
};

export const getProduct = async (id: number | any) => {
  return await request({
    url: `/product/${id}`,
    method: "get",
  });
};
