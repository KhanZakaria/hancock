import About from "./components/About";
import Accessories from "./components/Accessories";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import LiveStram from "./components/LiveStram";
import PopularGameSlides from "./components/PopularGameSlides";
import Team from "./components/Team";
import TopGames from "./components/TopGames";

const App = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <PopularGameSlides />
      <LiveStram />
      <TopGames />
      <Accessories />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
