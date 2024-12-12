import popularGaming from "../assets/images/img.png";
import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import ShowCard from "./ShowCard";
import Title from "./Title";

const About = () => {
  return (
    <section className="bg-[#121212] lg:min-h-[100vh] pb-[80px]">
      <div className="container">
        <Title
          text={" ABOUT THE BIGGEST HANCOK COMMUNITY"}
          position={"left-[150px] md:left-[200px]"}
          width={"max-w-[500px]"}
        />

        <div className="md:flex justify-between items-center gap-[80px]">
          <div className="w-full md:w-[60%]">
            <img
              src={popularGaming}
              alt="popular gaming"
            />
          </div>
          <div className="text-white w-full md:w-[40%]">
            <h3 className="font-oswald text-[27px]  uppercase mb-[10px] mt-[20px] md:mt-0">
              MOST POPULAR GAMING PLATFORM.
            </h3>
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-[5px] [&>li>span]:text-[#FF4655] [&>li]:font-barlow [&>li]:text-[18px] [&>li]:font-[400] [&>li]:mb-[10px]">
              <li>
                <span>
                  <FaCheck />
                </span>
                World Bigghest Community & Gaming Server
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                Friendly Clan & Mates
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                We Provide Gaming Accesories
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                Largest Online Gaming Community & Shop
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                Hancok reaches more than 150 million monthly users
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                We are leading global media brand for games
              </li>
            </ul>
            <p className="font-oswald text-[18px] font-[400] mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
              sed odio temporibus magni quia eveniet odit placeat repellat quod
              ipsum modi necessitatibus, dolorum officia!
            </p>
            <Button />
          </div>
        </div>

        <div className="flex flex-wrap gap-[5px] md:gap-[10px] justify-between">
          <ShowCard
            title={"112k"}
            text={"Community Earning"}
            className="w-2/4"
          />
          <ShowCard
            title={"12M"}
            text={"Total Member"}
          />
          <ShowCard
            title={"100k"}
            text={"Streams Complete"}
          />
          <ShowCard
            title={"844"}
            text={"Total Sponsers"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
