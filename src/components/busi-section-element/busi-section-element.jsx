import React from "react";
import "./busi-section-element.scss";
import { Icon } from "@iconify/react";

const BusinessSectionElement = ({ data }) => {
  const { icon, backgroundcolor, heading, subheading } = data;
  return (
    <div>
      <div className="business-section-elements">
        <div className="icon-grid-container">
          <div
            className="icon-wrap"
            style={{ backgroundColor: backgroundcolor }}
          >
            <Icon className="business-section-icon" icon={icon} />
          </div>
        </div>
        <p className="icon-heading">{heading}</p>
        <p className="icon-detail">{subheading} </p>
      </div>
    </div>
  );
};

export default BusinessSectionElement;
