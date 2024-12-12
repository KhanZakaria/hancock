import Title from "./Title";
import GamingAccessoriesSlidesItem from "./GamingAccessoriesSlidesItem";

import gamingController from "../assets/images/gaming-product51.png";
import gamingKeyboard from "../assets/images/gaming-product21.png";
import gamingMonitor from "../assets/images/gaming-product41.png";

const Accessories = () => {
  return (
    <section className="bg-[#121212]">
      <div className="container py-[50px]">
        <Title
          text={"WE PROVIDE ALL GAMING ACCESORIES"}
          position={"left-[480px] md:left-[220px]"}
        />
        <div className="flex justify-between gap-[20px]">
          {/* div for slidr  */}
          <GamingAccessoriesSlidesItem
            price={95}
            img={gamingController}
            title={"Gaming Controller"}
          />
          <GamingAccessoriesSlidesItem
            price={95}
            img={gamingKeyboard}
            title={"Gaming Keyboard"}
          />
          <GamingAccessoriesSlidesItem
            price={95}
            img={gamingMonitor}
            title={"Gaming Monitor"}
          />
          <GamingAccessoriesSlidesItem
            price={95}
            img={gamingController}
            title={"Gaming Controller"}
          />
          {/* end of slider div */}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
