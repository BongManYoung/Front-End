import { Fragment } from "react";
import { FunctionComponent } from "react";
import { ReviewType } from "Types/Review";
import { CommentWrapper } from "./styles";
import { ReactComponent as UserProfile } from "Assets/User_Profile.svg";

type IReviewItemProps = ReviewType;

const ReviewItem: FunctionComponent<IReviewItemProps> = ({ content, user }) => {
  return (
    <Fragment>
      <CommentWrapper>
        <header className="reviewHeader">
          <UserProfile className="profile" />
          <h3 className="nickname">{user.nickname}</h3>
        </header>

        <p className="reviewContent">{content}</p>
      </CommentWrapper>
    </Fragment>
  );
};

export default ReviewItem;
