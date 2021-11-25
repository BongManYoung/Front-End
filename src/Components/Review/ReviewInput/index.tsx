import React, { KeyboardEvent, useCallback, useEffect } from "react";
import { ReactComponent as Mic } from "Assets/MIC.svg";
import { ReactComponent as MicON } from "Assets/MIC_ON.svg";
import { InputWrapper } from "./styles";
import { ChangeEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRecoilState } from "recoil";
import { reviewInputAtom } from "Store/reviewAtom";

interface InputProps {}

const ReviewInput: React.FunctionComponent<InputProps> = () => {
  const { listening, transcript } = useSpeechRecognition();

  const [reviewContent, setReviewContent] = useRecoilState(reviewInputAtom);

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

  const handleSubmitReview = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.shiftKey) {
        return;
      }

      if (event.key === "Enter") {
        if (window.confirm(reviewContent)) {
          alert("성공");
          setReviewContent("");
        }
      }
    },
    [reviewContent, setReviewContent]
  );

  useEffect(() => {
    setReviewContent(transcript);
  }, [transcript, setReviewContent]);

  return (
    <React.Fragment>
      <InputWrapper>
        <TextareaAutosize
          onKeyDown={handleSubmitReview}
          className="reviewInput"
          value={reviewContent}
          onChange={handleChangeReviewContent}
        />
        {listening ? (
          <MicON className="mic" onClick={handleSTTStopListening} />
        ) : (
          <Mic className="mic" onClick={handleSTTListener} />
        )}
      </InputWrapper>
    </React.Fragment>
  );
};

export default ReviewInput;
