import "./hero-section.scss";
import bulkExportImage from "../../assets/Group 6.png";
import dataAnalyticsImage from "../../assets/Group 7 (1).png";
import heroImage from "../../assets/Group 4 (1).png";
const Herosection = () => {
  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="hero-element hero-content">
          <p className="hero-content-h1">
            Manage Payroll <br />
            Like an Expert
          </p>
          <p className="hero-content-sub">
            Payna is helping you to setting up the payroll without <br />
            required any finance skills or knowledge before
          </p>
          <button className="hero-content-btn">Get Started</button>
        </div>
        <div className="hero-element hero-image-container">
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src={heroImage}
              alt="heroSectionImage"
            />
            <img
              className="bulkExportImage"
              src={bulkExportImage}
              alt="bulkExportImage"
            />
            <img
              className="dataAnalyticsImage"
              src={dataAnalyticsImage}
              alt="dataAnalytics image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Herosection;
