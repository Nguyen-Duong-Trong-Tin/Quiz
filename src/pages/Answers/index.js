import { useEffect, useState } from "react";
import { getAnswersByUserID } from "../../services/answersService";
import { getCookie } from "../../helpers/cookies";
import { Link } from "react-router-dom";
import { getTopics } from "../../services/topicsService";
import "./Answers.scss";

function Answers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const resultAnswers = await getAnswersByUserID(getCookie("id"));
      const resultTopics = await getTopics();
      setData(resultAnswers.map(item => (
        {
          id: item.id,
          topicId: item.topicId,
          name: resultTopics.find(val => item.topicId === val.id).name
        }
      )));
    }
    fetchApi();
  }, []);

  return (
    <>
      <div className="answers">
        <h2 className="answers__title">List of Tests</h2>
        <table className="answers__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name of topic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={`/result/${item.id}`}>
                    <button className="button button--submit">Watch</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Answers;