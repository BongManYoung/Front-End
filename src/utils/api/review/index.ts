import request from "../index";

export const createReview = async (storeIdx: any, content: string) => {
  const data = {
    content,
  };
  return await request({
    url: `/review/${storeIdx}`,
    method: "post",
    data: data,
  });
};

export const getReview = async (storeIdx: any) => {
  return await request({
    url: `/review/${storeIdx}`,
    method: "get",
  });
};

export const addLike = async (reviewIdx: any) => {
  return await request({
    url: `/review/like/${reviewIdx}`,
    method: "put",
  });
};

export const cancelLike = async (reviewIdx: any) => {
  return await request({
    url: `/review/like/cancel/${reviewIdx}`,
    method: "put",
  });
};

export const addDisLike = async (reviewIdx: any) => {
  return await request({
    url: `/review/dislike/${reviewIdx}`,
    method: "put",
  });
};

export const cancelDisLike = async (reviewIdx: any) => {
  return await request({
    url: `/review/dislike/cancel/${reviewIdx}`,
    method: "put",
  });
};
