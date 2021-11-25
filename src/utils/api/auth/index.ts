import request from "../index";

export const postSignIn = (nickname: string, password: string) => {
  return request({
    url: "/auth",
    method: "post",
    data: { nickname, password },
  });
};

export const postJoin = (nickname: string, password: string) => {
  return request({
    url: "/user",
    method: "post",
    data: { nickname, password },
  });
};

