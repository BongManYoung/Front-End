import request from "../index";

export const postSignIn = (nickname: string, password: string) => {
  return request({
    url: "",
    method: "post",
    data: { nickname, password },
  });
};

export const postJoin = (nickname: string, password: string) => {
  return request({
    url: "",
    method: "post",
    data: { nickname, password },
  });
};
