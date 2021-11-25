import request from "../index";
const token = `Bearer ${localStorage.getItem("token")}`;

export const createReview = async (storeIdx: any, content: string) => {
  const data = {
    content,
  };
  return await request({
    url: `/review/${storeIdx}`,
    method: "post",
    data: data,
    headers: { Authorization: token },
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
    headers: { Authorization: token },
  });
};

export const cancelLike = async (reviewIdx: any) => {
  return await request({
    url: `/review/like/cancel/${reviewIdx}`,
    method: "put",
    headers: { Authorization: token },
  });
};

export const addDisLike = async (reviewIdx: any) => {
  return await request({
    url: `/review/dislike/${reviewIdx}`,
    method: "put",
    headers: { Authorization: token },
  });
};

export const cancelDisLike = async (reviewIdx: any) => {
  return await request({
    url: `/review/dislike/cancel/${reviewIdx}`,
    method: "put",
    headers: { Authorization: token },
  });
};
