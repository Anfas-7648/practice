import "./businessection.scss";
import { Icon } from "@iconify/react";
const BusinessSection = () => {
  return (
    <section className="business-section">
      <div className="business-section-container">
        <div className="business-section-header">
          <p className="heading">For Your Business</p>
          <p className="subheading">
            We did research what your company needs and
            <br /> here we are providing all of them just for you
          </p>
        </div>
        <div className="business-section-body">
          <div className="business-section-elements">
            <div className="icon-grid-container">
              <div className="icon-wrap" style={{ backgroundColor: "#1F7CFF" }}>
                <Icon
                  className="business-section-icon"
                  icon="lucide:briefcase"
                />
              </div>
            </div>
            <p className="icon-heading">Share Insights</p>
            <p className="icon-detail">
              Working together with your team to make decisions
            </p>
          </div>
          <div className="business-section-elements">
            <div className="icon-grid-container">
              <div className="icon-wrap" style={{ backgroundColor: "#F75C4E" }}>
                <Icon className="business-section-icon" icon="bi:send" />
              </div>
            </div>
            <p className="icon-heading">Track Leads</p>
            <p className="icon-detail">
              See where your money goes and comes in business{" "}
            </p>
          </div>
          <div className="business-section-elements">
            <div className="icon-grid-container">
              <div className="icon-wrap" style={{ backgroundColor: "#191046" }}>
                <Icon
                  className="business-section-icon"
                  icon="clarity:no-wifi-solid"
                />
              </div>
            </div>
            <p className="icon-heading">Offline Mode</p>
            <p className="icon-detail">
              Use the feature while off from internet? sure can{" "}
            </p>
          </div>
          <div className="business-section-elements">
            <div className="icon-grid-container">
              <div className="icon-wrap" style={{ backgroundColor: "#FF1FB3" }}>
                <Icon
                  className="business-section-icon"
                  icon="basil:trello-outline"
                />
              </div>
            </div>
            <p className="icon-heading">Kanban Mode</p>
            <p className="icon-detail">
              Organize the report that easy to be understand
            </p>
          </div>
          <div className="business-section-elements">
            <div className="icon-grid-container">
              <div className="icon-wrap" style={{ backgroundColor: "#F7954E" }}>
                <Icon
                  className="business-section-icon"
                  icon="fluent-mdl2:giftbox"
                />
              </div>
            </div>
            <p className="icon-heading">Reward System</p>
            <p className="icon-detail">
              Motivate your team working harder and receive a gift{" "}
            </p>
          </div>
          <div className="business-section-elements">
            <div className="icon-grid-container">
              <div className="icon-wrap" style={{ backgroundColor: "#5C4EF7" }}>
                <Icon
                  className="business-section-icon"
                  icon="ph:globe-simple"
                />
              </div>
            </div>
            <p className="icon-heading">189 Country</p>
            <p className="icon-detail">
              Working together worldwide people from anywhere{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessSection;
