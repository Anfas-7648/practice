import "./home.scss";
import Navigation from "../../components/navigation/navigation";
import Herosection from "../../components/hero-section/hero-section";
import LogoDisplay from "../../components/clients-logo-display/logo-display";
import BusinessSection from "../../components/business-details/businessection";
import Footer from "../../components/footer/footer";
const Home = () => {
  return (
    <div className="body-container">
      <Navigation />
      <Herosection />
      <LogoDisplay />
      <BusinessSection />
      <Footer />
    </div>
  );
};
export default Home;
