import React, { KeyboardEvent, useCallback, useEffect } from "react";
import { ReactComponent as Mic } from "Assets/MIC.svg";
import { ReactComponent as MicON } from "Assets/MIC_ON.svg";
import { InputWrapper } from "./styles";
import { ChangeEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRecoilState, useSetRecoilState } from "recoil";
import { reviewInputAtom, reviewsAtom } from "Store/reviewAtom";
import { ReviewType } from "Types/Review";
import { createReview } from "utils/api/review";
import { useLocation } from "react-router";
import { parse } from "query-string";

interface InputProps {}

const ReviewInput: React.FunctionComponent<InputProps> = () => {
  const { listening, transcript } = useSpeechRecognition();

  const setReviews = useSetRecoilState(reviewsAtom);
  const [reviewContent, setReviewContent] = useRecoilState(reviewInputAtom);
  const location = useLocation();
  const query = parse(location.search);
  const id = query.id;

  const handleChangeReviewContent = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setReviewContent(event.target.value);
    },
    [setReviewContent]
  );

  const handleSTTListener = useCallback(() => {
    SpeechRecognition.startListening({ language: "ko", continuous: true });
  }, []);

  const handleSTTStopListening = useCallback(() => {
    SpeechRecognition.stopListening();
  }, []);

  const addReview = useCallback(() => {
    const newReview: ReviewType = {
      idx: Math.floor(Math.random()),
      content: reviewContent,
      user: {
        idx: Math.floor(Math.random()),
        nickname: "테스트",
      },
    };
    setReviews((prevReviews) => [newReview, ...prevReviews]);

    createReview(id, reviewContent);
  }, [reviewContent, setReviews]);

  const handleSubmitReview = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.shiftKey) {
        return;
      }

      if (event.key === "Enter") {
        if (window.confirm("리뷰를 작성하시겠습니까?")) {
          handleSTTStopListening();
          addReview();
        }
      }
    },
    [addReview, handleSTTStopListening]
  );

  useEffect(() => {
    setReviewContent(transcript);
  }, [transcript, setReviewContent]);

  return (
    <React.Fragment>
      <InputWrapper>
        <TextareaAutosize
          onKeyPress={handleSubmitReview}
          className="reviewInput"
          value={reviewContent}
          onChange={handleChangeReviewContent}
        />
        {listening ? (
          <MicON
            className="mic"
            style={{ width: "15px", marginRight: "20px" }}
            onClick={handleSTTStopListening}
          />
        ) : (
          <Mic className="mic" onClick={handleSTTListener} />
        )}
      </InputWrapper>
    </React.Fragment>
  );
};

export default ReviewInput;
