import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { useSelector } from "react-redux";
import logo from "../../images/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { getCookie } from "../../helpers/cookies";

function LayoutDefault() {
  const isLogin = useSelector(state => state.loginReducer);

  const fullName = getCookie("fullName");

  const navLinkActive = (e) => {
    return `header__link${e.isActive ? " header__link--active" : ""}`;
  }

  return (
    <>
      <section className="layout-default">
        <header className="header">
          <div className="header__top">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="header__account">
              {isLogin && <h3>{fullName}</h3>}
            </div>
          </div>
          <div className="header__main">
            <ul className="header__left">
              <li>
                <NavLink to="/" className={navLinkActive}>Home</NavLink>
              </li>
              {isLogin && (
                <>
                  <li>
                    <NavLink to="/topics" className={navLinkActive}>Topics</NavLink>
                  </li>
                  <li>
                    <NavLink to="/answers" className={navLinkActive}>Answers</NavLink>
                  </li>
                </>
              )}
            </ul>
            <ul className="header__right">
              {isLogin ? (
                <>
                  <li>
                    <NavLink to="/logout" className={navLinkActive}>Logout</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login" className={navLinkActive}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className={navLinkActive}>Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <ul className="footer__left">
            <li>
              <a href="https://myaccount.google.com/personal-info?hl=vi&utm_source=OGB&utm_medium=act&fbclid=IwZXh0bgNhZW0CMTAAAR1CNvKyhd4d7GEICeA8Y0n6OoLe-BZfM82YxUo__EFYqQBw4zIvn_MGaNI_aem_ZmFrZWR1bW15MTZieXRlcw">
                <MdOutlineMailOutline />
                tinht5667@gmail.com
              </a>
            </li>
          </ul>
          <ul className="footer__right">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100015809478694">
                <CiFacebook />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tin963145/">
                <CiInstagram />
                Instagram
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </>
  )
}

export default LayoutDefault;