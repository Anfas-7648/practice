import "./navigation.scss";
import logo from "../../assets/logo.png";
const Navigation = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-components navbar-logo-wrap">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-components links-wrapper ">
        <ul className="navbar-links">
          <li>
            <a className="navbar-links-elements" href="#">
              home
            </a>
          </li>
          <li>
            <a className="navbar-links-elements" href="#">
              features
            </a>
          </li>
          <li>
            <a className="navbar-links-elements" href="#">
              showcases
            </a>
          </li>
          <li>
            <a className="navbar-links-elements" href="#">
              pricing
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-components ">
        <button className=" sign-in">Sign in</button>
      </div>
    </div>
  );
};
export default Navigation;
