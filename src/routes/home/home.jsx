import "./home.scss";
import Navigation from "../../components/navigation/navigation";
import Herosection from "../../components/hero-section/hero-section";
const Home = () => {
  return (
    <div className="body-container">
      <Navigation />
      <Herosection />
    </div>
  );
};
export default Home;
