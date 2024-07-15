import { setCookie } from "../../helpers/cookies";
import { login } from "../../services/usersService";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../actions/login";
import "./Login.scss";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await login(email, password);

    if (result.length > 0) {
      setCookie("id", result[0].id, 1);
      setCookie("fullName", result[0].fullName, 1);
      setCookie("email", result[0].email, 1);
      setCookie("token", result[0].token, 1);
      dispatch(checkLogin(true));
      navigate("/");
    } else {
      alert("Wrong the email or the password!");
    }
  }

  return (
    <>
      <div className="login">
        <h2 className="login__title">Welcome to CTU E-learning!</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__input">
            <input type="email" name="email" placeholder="Input your email" />
          </div>
          <div className="login__input">
            <input type="password" name="password" placeholder="Input your password" />
          </div>
          <button className="button button--submit" type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login;