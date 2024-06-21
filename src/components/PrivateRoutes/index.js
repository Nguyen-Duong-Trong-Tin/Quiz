import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isLogin = useSelector(state => state.loginReducer);

  return (
    <>
      {isLogin ? (<Outlet />) : (<Navigate to="/login" />)}
    </>
  )
}

export default PrivateRoutes;