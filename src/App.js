import "./App.css";
import AboutUs from "./Components/About/About";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import SpecialMenu from "./Components/Menu/SpecialMenu";
import Chef from "./Components/Chef/Chef";
import Intro from "./Components/Intro/Intro";
import Laurels from "./Components/Laurels/Laurels";
import Gallery from "./Components/Gallery/Gallery";
import FindUs from "./Components/Findus/FindUs";
import Footer from "./Components/Footer/Footer";

const App = () => (
  <div>
    <Navbar />
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
