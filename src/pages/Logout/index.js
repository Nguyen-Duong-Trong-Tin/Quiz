import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookies";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  navigate("/login");

  deleteAllCookies();

  dispatch(checkLogin(false));

  return (
    <>
      Logout
    </>
  )
}

export default Logout;