import { Fragment, useState } from "react";
import { FunctionComponent } from "react";
import { ReviewType } from "Types/Review";
import { CommentWrapper, ReviewIcon } from "./styles";
import { ReactComponent as UserProfile } from "Assets/User_Profile.svg";

type IReviewItemProps = ReviewType;

const ReviewItem: FunctionComponent<IReviewItemProps> = ({ content, user }) => {
  const [buttonSelect, setButtonSelect] = useState<boolean>(false);
  const [worstButton, setWorstButton] = useState<boolean>(false);

  return (
    <Fragment>
      <CommentWrapper>
        <header className="reviewHeader">
          <UserProfile className="profile" />
          <h3 className="nickname">{user.nickname}</h3>
        </header>

        <div className="reviewContainer">
          <p className="reviewContent">{content}</p>
          <span>신고</span>
        </div>
        <ReviewIcon>
          <div
            className="icon_wrapper"
            onClick={() => {
              setButtonSelect(!buttonSelect);
              setWorstButton(false);
            }}
            style={
              buttonSelect
                ? { background: "#6B1AEE", color: "white" }
                : { background: "" }
            }
          >
            <span>👍</span>
            <span>10</span>
          </div>
          <div
            className="icon_wrapper"
            onClick={() => {
              setWorstButton(!worstButton);
              setButtonSelect(false);
            }}
            style={
              worstButton
                ? { background: "#6B1AEE", color: "white" }
                : { background: "" }
            }
          >
            <span>👎</span>
            <span>10</span>
          </div>
        </ReviewIcon>
      </CommentWrapper>
    </Fragment>
  );
};

export default ReviewItem;
