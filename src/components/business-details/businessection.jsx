import "./businessection.scss";
import BusinessSectionElement from "../busi-section-element/busi-section-element";
const BusinessSection = () => {
  const businessData = [
    {
      id: 1,
      icon: "lucide:briefcase",
      backgroundcolor: "#1F7CFF",
      heading: "Share Insights",
      subheading: "Working together with your team to make decisions",
    },
    {
      id: 2,
      icon: "bi:send",
      backgroundcolor: "#F75C4E",
      heading: "Track Leads",
      subheading: "See where your money goes and comes in business",
    },
    {
      id: 3,
      icon: "clarity:no-wifi-solid",
      backgroundcolor: "#191046",
      heading: "Offline Mode",
      subheading: "Use the feature while off from internet? sure can",
    },
    {
      id: 4,
      icon: "basil:trello-outline",
      backgroundcolor: "#FF1FB3",
      heading: "Kanban Mode",
      subheading: "Organize the report that easy to be understand",
    },
    {
      id: 5,
      icon: "fluent-mdl2:giftbox",
      backgroundcolor: "#F7954E",
      heading: "Reward System",
      subheading: "Motivate your team working harder and receive a gift",
    },
    {
      id: 6,
      icon: "ph:globe-simple",
      backgroundcolor: "#5C4EF7",
      heading: "189 Country",
      subheading: "Working together worldwide people from anywhere",
    },
  ];

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
          {businessData.map((data) => (
            <BusinessSectionElement key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BusinessSection;
