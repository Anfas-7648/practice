import "./logo-display.scss";
import logo1 from "../../assets/companyLogos/apple-11 1.png";
import logo2 from "../../assets/companyLogos/Group 13.png";
import logo3 from "../../assets/companyLogos/slack-2 1.png";
import logo4 from "../../assets/companyLogos/spotify-1 1.png";
import logo5 from "../../assets/companyLogos/google-2015 1.png";
const LogoDisplay = () => {
  return (
    <div className="logo-display-container">
      <div className="logo-display-section">
        <div className="logoContentSection">
          <p className="logoContent">
            Trusted by <br />
            Global Companies
          </p>
        </div>
        <div className="logoImages">
          <div className="logoImageWrapper">
            <img className="clientLogo" src={logo1} alt="clientLogo" />
            <img className="clientLogo" src={logo2} alt="clientLogo" />
            <img className="clientLogo" src={logo3} alt="clientLogo" />
            <img className="clientLogo" src={logo4} alt="clientLogo" />
            <img className="clientLogo" src={logo5} alt="clientLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoDisplay;
