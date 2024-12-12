import slider1 from "../assets/images/violant.png";
import slider2 from "../assets/images/trend-games31.png";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import TitleRight from "./TitleRight";

const PopularGameSlides = () => {
  return (
    <section className="bg-[#191919] text-white">
      <div className="container py-[20px] md:py-[90px]">
        {/* heading start  */}
        <TitleRight
          text="POPULAR GAMES AROUND THE WORLD"
          position={"right-[480px] md:right-[130px]"}
          width={"max-w-[600px]"}
        />
        {/* end of heading  */}

        {/* slider start */}
        <div className="relative">
          <div className="flex justify-between items-baseline">
            <div>
              <img
                src={slider1}
                alt="slider1"
              />
            </div>
            <div>
              <img
                src={slider2}
                alt="slider2"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="py-[5px] px-[5px] flex items-center h-[40px] w-[40px] rounded-full justify-center border-white border-[2px]  mb-[10px]">
              <FaAngleLeft />
            </div>
            <div className="py-[5px] px-[5px] flex items-center h-[40px] w-[40px] rounded-full justify-center border-white border-[2px]">
              <FaAngleRight />
            </div>
          </div>
        </div>
        {/* slider End  */}
      </div>
    </section>
  );
};

export default PopularGameSlides;
