import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswer } from "../../services/answersService";
import { getQuestions } from "../../services/questionsService";
import "./Result.scss";
import { handleResult } from "../../helpers/handle";
import { listOfABCD } from "../../helpers/constants";

function Result() {
  const params = useParams();

  const [data, setData] = useState([]);

  let result = handleResult(data);

  useEffect(() => {
    const fetchApi = async () => {
      const resultAnswers = await getAnswer(params.id);
      const resultQuestions = await getQuestions(resultAnswers.topicId);

      setData(resultAnswers.answers.map(item => {
        const element = resultQuestions.find(val => val.id === item.questionId);

        if (!element) {
          return {}
        }

        return {
          questionId: item.questionId,
          question: element.question,
          answers: element.answers,
          answer: item.answer,
          correctAnswer: element.correctAnswer
        }
      }));
    }
    fetchApi();
    // eslint-disable-next-line
  }, []);

  console.log(data);

  return (
    <>
      <div className="result">
        <h2 className="result__title">Result</h2>
        <ul className="result__statistical">
          <li>
            <span>Correct:</span>
            {result.correct}
          </li>
          <li>
            <span>Wrong:</span>
            {result.quantity - result.correct}
          </li>
          <li>
            <span>Total of questions:</span>
            {result.quantity}
          </li>
          <li>
            <span>Correct percentage:</span>
            {(result.quantity !== 0 ? result.correct / result.quantity : 0).toFixed(2)}%</li>
        </ul>
        <div className="result__form">
          {data && data.map((item, idx) => (
            <div key={item.questionId} className="result__item">
              <div>
                <h3 className="result__numbers">
                  Câu {idx + 1}

                  {item.answer === item.correctAnswer ? (
                    <div className="result__status result__status--correct">Đúng</div>
                  ) : (
                    <div className="result__status result__status--wrong">Sai</div>
                  )}

                </h3>
                <div className="result__question">{item.question}</div>
              </div>

              {item.answers && item.answers.map((val, idx) => (
                <div className="result__answer" key={idx}>

                  {item.answer !== -1 && idx === item.answer ? (
                    <input
                      type="radio"
                      name={`question-${item.questionId}`}
                      id={`${item.questionId}-${idx}`}
                      checked
                    />
                  ) : (
                    <input
                      type="radio"
                      name={`question-${item.questionId}`}
                      id={`${item.questionId}-${idx}`}
                      disabled
                    />
                  )}

                  {idx === item.correctAnswer ? (
                    <label className="result__answer result__answer--correct">
                      <span>{listOfABCD[idx]}.</span>
                      {val}
                    </label>
                  ) : (

                    <>
                      {idx === item.answer ? (
                        <label className="result__answer result__answer--wrong">
                          <span>{listOfABCD[idx]}.</span>
                          {val}
                        </label>
                      ) : (
                        <label className="result__answer">
                          <span>{listOfABCD[idx]}.</span>
                          {val}
                        </label>
                      )}
                    </>

                  )}

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Result;