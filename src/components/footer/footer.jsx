import "./footer.scss";
import footerImage from "../../assets/Group 26.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-image-container">
          <div className="footer-image-wrapper">
            <img className="footer-image" src={footerImage} alt="footerImage" />
          </div>
        </div>
        <div className="footer-content-container">
          <p className="footer-heading">And Boost Productivity</p>
          <p className="footer-subheading">
            Your employees can bring any success into your business, so we need
            to take care of them
          </p>
          <div className="email-collection">
            <form>
              <input
                className="email"
                placeholder="Email Address"
                type="text"
                name="name"
              />
            </form>
            <button className="footer-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
