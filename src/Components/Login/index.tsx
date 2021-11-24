import React from "react";
import * as S from "./style";

const Login = () => {
  return (
    <S.LoginWrapper>
      <img src="" alt="로고" />
      <S.InputWrapper>
        <div className="input-item-wrap">
          <span>닉네임</span>
          <input type="text" placeholder="닉네임을 입력해주세요" />
        </div>
        <div className="input-item-wrap">
          <span>비밀번호</span>
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div className="input-item-wrap">
          <span>비밀번호 확인</span>
          <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
        </div>
      </S.InputWrapper>
    </S.LoginWrapper>
  );
};

export default Login;
