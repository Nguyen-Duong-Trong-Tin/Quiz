import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "../../services/questionsService";
import { getTopics } from "../../services/topicsService";
import { getCookie } from "../../helpers/cookies";
import { postAnswer } from "../../services/answersService";
import { handleAnswer } from "../../helpers/handle";
import { randomQuestions } from "../../helpers/randomQuestions";
import "./Questions.scss";
import { listOfABCD } from "../../helpers/constants";

function Questions() {
  const params = useParams();

  const [data, setData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const resultTopic = await getTopics(params.id);
      const resultQuestions = await getQuestions(params.id);
      setData({
        topic: resultTopic[0],
        questions: randomQuestions(resultQuestions, 20)
      });
    }
    fetchApi();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const arrayAnswers = handleAnswer([...e.target]);

    const options = {
      userId: getCookie("id"),
      topicId: params.id,
      answers: arrayAnswers.map(item => item)
    };

    const result = await postAnswer(options);

    if (result) {
      navigate(`/result/${result.id}`);
    }
  }

  return (
    <>
      <div className="questions">
        <h2 className="questions__title">Name of Topic {data && data.topic.name}</h2>
        <form className="questions__form" onSubmit={handleSubmit}>
          {data && data.questions.map((item, idx) => (
            <div key={item.id} className="questions__item">
              <h3 className="questions__numbers">Câu {idx + 1}</h3>
              <div className="questions__question">{item.question}</div>
              {item.answers.map((val, idx) => (
                <div className="questions__answer" key={idx}>
                  <input type="radio" name={`question-${item.id}`} id={`${item.id}-${idx}`} />
                  <label htmlFor={`${item.id}-${idx}`}>
                    <span>{listOfABCD[idx]}.</span>
                    {val}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button className="button button--submit" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Questions;