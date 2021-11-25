import { Fragment, useState } from "react";
import { CommentWrapper, ReviewIcon } from "./styles";
import { ReactComponent as UserProfile } from "Assets/User_Profile.svg";
import {
  addDisLike,
  addLike,
  cancelDisLike,
  cancelLike,
} from "utils/api/review";
import { useLocation } from "react-router";
import { parse } from "query-string";
import { ToastError, ToastSuccess } from "Hook/toastHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  review: any;
}

const ReviewItem = ({ review }: Props) => {
  const [buttonSelect, setButtonSelect] = useState<boolean>(false);
  const [worstButton, setWorstButton] = useState<boolean>(false);

  const location = useLocation();
  const query = parse(location.search);
  const id = query.id;

  const onClickButton = () => {
    setButtonSelect(!buttonSelect);
    setWorstButton(false);
    addLike(id)
      .then(() => {
        ToastSuccess("좋아요가 표시 되었습니다.");
      })
      .catch(() => ToastError("실패하였습니다."));
    if (buttonSelect) {
      cancelLike(id);
    }
  };

  const onClickWorst = () => {
    setWorstButton(!worstButton);
    setButtonSelect(false);
    addDisLike(id)
      .then(() => {
        ToastSuccess("싫어요가 표시 되었습니다.");
      })
      .catch(() => ToastError("실패하였습니다."));
    if (worstButton) {
      cancelDisLike(id);
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <CommentWrapper>
        <header className="reviewHeader">
          <UserProfile className="profile" />
          <h3 className="nickname">{review?.nickname}</h3>
        </header>

        <div className="reviewContainer">
          <p className="reviewContent">{review?.reviewContent}</p>
          <span>신고</span>
        </div>
        <ReviewIcon>
          <div
            className="icon_wrapper"
            onClick={onClickButton}
            style={
              buttonSelect
                ? { background: "#6B1AEE", color: "white" }
                : { background: "" }
            }
          >
            <span>👍</span>
            <span>{review.perfect}</span>
          </div>
          <div
            className="icon_wrapper"
            onClick={onClickWorst}
            style={
              worstButton
                ? { background: "#6B1AEE", color: "white" }
                : { background: "" }
            }
          >
            <span>👎</span>
            <span>{review.notMuch}</span>
          </div>
        </ReviewIcon>
      </CommentWrapper>
    </Fragment>
  );
};

export default ReviewItem;
