import "./home.scss";
import Navigation from "../../components/navigation/navigation";
import Herosection from "../../components/hero-section/hero-section";
import LogoDisplay from "../../components/clients-logo-display/logo-display";
const Home = () => {
  return (
    <div className="body-container">
      <Navigation />
      <Herosection />
      <LogoDisplay />
    </div>
  );
};
export default Home;
