import { useEffect, useState } from "react";
import styles from "./Quizpage.module.scss";
import cx from "classnames";
import { TYPE_INITIAL_STATE, getQuiz } from "../../store/slice/quizSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/app";
import { useNavigate } from "react-router-dom";

function QuizPage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, data }: TYPE_INITIAL_STATE = useAppSelector((store) => store.quiz);
  const [correct, setCorrect] = useState<null | boolean>(null);
  const [answer, setAnswers] = useState("");

  useEffect(() => {
    (async () => {
      dispatch(getQuiz());
    })()
  }, []);

  const nextQuestion = async () => {
    setAnswers("");
    setCorrect(null);
    dispatch(getQuiz());
  }

  const checkAnswerHandler = () => {
    if (answer === data?.Answer) {
      setCorrect(true);
      const storage = JSON.parse(localStorage.getItem("payload") as string);
      if (storage.count) {
        storage.count++;
      } else {
        storage.count = 1;
      }
      localStorage.setItem("payload", JSON.stringify(storage));
    } else {
      setCorrect(false);
    }
  };

  return (
    <div>
      {!isLoading && data?.Question ?
        <div>
          <p className="text-center mt-3 text-white body-text">Mystery Questions</p>
          <br />
          <p className="text-center mt-3 text-white h6">{data?.Question}</p>
          <br />
          <div className={styles.Quiz}>
            {
              data?.Options?.map(item => {
                return <div role="presentation"
                  onClick={() => setAnswers(item)}
                  className={cx(styles.Quiz__options, { [styles.BorderSelect]: item === answer })}
                  key={item}>
                  {item}
                </div>
              })
            }
          </div>
          <br />
          <button className="btn btn-block btn-success" onClick={() => checkAnswerHandler()}>Check Answer</button>
          <br />
          {answer && <div className="mt-4">
            {
              correct == true ? <p className="text-white h6 text-center">Youre right!!</p> : correct === false ? <p className="text-white h6 text-center">Opps! wrong!!</p> : null
            }
          </div>}
          <button className="btn btn-block btn-danger mt-2" onClick={() => nextQuestion()}>Next Questions</button>
          <button className="btn btn-block btn-primary mt-2" onClick={() => navigate('/finish')}>Finish</button>
        </div> : <p className="text-center mt-3 text-white h6">Loading....</p>
      }
    </div>
  )
}

export default QuizPage