import { useSelector } from 'react-redux';

function Home() {
  const isLogin = useSelector(state => state.loginReducer);

  return (
    <>
      <div className="home">
        {isLogin ? (
          <>
            <h2>Welcome to Frontend CTU</h2>
            <p>Website trắc nghiệm online lập trình Frontend của CTU là một nền tảng trực tuyến cho phép các lập trình viên thực hiện các bài kiểm tra trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập trình Frontend.</p>
            <p>Website cung cấp các bài kiểm tra về HTML, CSS, Javascript, React,...</p>
          </>
        ) : (
          <>
            <p>Website trắc nghiệm online lập trình Frontend của CTU là một nền tảng trực tuyến cho phép các lập trình viên thực hiện các bài kiểm tra trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập trình Frontend.</p>
            <p>Website cung cấp các bài kiểm tra về HTML, CSS, Javascript, React,...</p>
          </>
        )}
      </div>
    </>
  )
}

export default Home;