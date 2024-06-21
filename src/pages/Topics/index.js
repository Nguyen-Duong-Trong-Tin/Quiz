import { useEffect, useState } from "react";
import { getTopics } from "../../services/topicsService";
import { Link } from "react-router-dom";
import "./Topics.scss";

function Topics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getTopics();
      setData(result);
    }
    fetchApi();
  }, []);

  console.log(data);

  return (
    <>
      <div className="topics">
        <h2 className="topics__title">Topics</h2>
        <table className="topics__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name of topic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} className="topics__item">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button className="button button--submit">
                    <Link to={`/questions/${item.id}`}>Test</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Topics;