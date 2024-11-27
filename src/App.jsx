import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import "./App.css";
import FirstScreen from "./components/FirstScreen";
import ScrollToTop from "./components/ScrollToTop";
import Chat from "./components/Chat";
import img1 from './images/img1.jpeg';
import images from './data/ListOfImages';

const AppContent = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <div className="mt-16">
        <FirstScreen img1={img1} />
      </div>

      <div className="mt-8">
        <Marquee />
      </div>

      <Hero />

      <div className="my-12 mx-auto w-full max-w-7xl">
        <Slider images={images} />
      </div>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
      <ScrollToTop />
      <Chat /> {/* Add Chat component here */}
    </Router>
  );
};

export default App;
