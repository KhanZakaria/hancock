import GameCard from "./GameCard";
import TitleRight from "./TitleRight";
import card1 from "../assets/images/sale11.png";
import card2 from "../assets/images/sale31.png";
import card3 from "../assets/images/sale41.png";
import card4 from "../assets/images/sale51.png";
import slideImage from "../assets/images/slide-img.png";

const TopGames = () => {
  return (
    <section className="bg-[#191919] py-[50px] md:py-[80px]">
      <div className="container">
        <TitleRight
          text={"TOP GAMES ON BLACK FRIDAY SALE"}
          position={"right-[430px] md:right-[100px]"}
          width={"max-w-[500px]"}
        />
        <div className="flex justify-between items-center py-[44px]"></div>
      </div>
      <div className="container">
        <div className=" flex-col md:flex md:flex-row gap-[20px] justify-center md:justify-between">
          <GameCard
            image={card1}
            title={"Horizon Zero Dawn™ Complet..."}
            subtitle={"Guerrilla Games"}
          />
          <GameCard
            image={card2}
            title={"Disciples: Liberation"}
            subtitle={"Frima Studio"}
          />
          <GameCard
            image={card3}
            title={"Horizon Zero Dawn™ Complet..."}
            subtitle={"Guerrilla Games"}
          />
          <GameCard
            image={card4}
            title={"Industries of Titan"}
            subtitle={"Brace Yourself Games"}
          />
        </div>
      </div>
      <div className="container mt-[30px] md:mt-[60px] ">
        <h3 className="font-barlow text-[30px] capitalize text-white mb-[30px]">
          Hancok Games Catalog
        </h3>
        <div className="py-[42px] md:pr-[110px] pr-[50px] pl-[42px] bg-[#212121] flex md:flex-row flex-col-reverse justify-between items-center">
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-oswald text-[16px] mt-[20px] md:mt-0 capitalize text-[#FF4655]">
              Choose Your Favourite Game
            </h4>
            <h2 className="font-barlow text-[38px] font-[600] text-white uppercase">
              Explore hancok catalog for your next favorite game!
            </h2>
            <p className="font-oswald text-[16px] font-[600] text-[#666666]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              culpa ratione enim maiores nisi cupiditate non nesciunt officia
              labore aut? Et, vero!
            </p>
            <button className="px-[30px] py-[13px] font-oswald text-[16px] capitalize text-white bg-black border rounded-sm mt-[20px]">
              browse all
            </button>
          </div>
          <div className="flex-1 justify-items-center">
            <img
              src={slideImage}
              alt="slide image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopGames;
