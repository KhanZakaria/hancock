import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TeamCard = () => {
  let [isHovered, setIsHoverd] = useState(true);
  return (
    <div
      className={`min-h-[300px] md:min-h-[430px] w-full lg:w-[calc(50%-10px)] flex flex-col justify-end bg-team-bg bg-cover bg-no-repeat bg-center ${
        isHovered ? null : "filterImage"
      } `}
      onMouseOver={() => setIsHoverd(true)}
      onMouseOut={() => setIsHoverd(false)}
    >
      {isHovered ? (
        <div className="text-white bg-[rgba(37,36,36,38%)] py-[24px] px-[20px]">
          <h2 className="font-barlow text-[30px] capitalize font-[700] text-white">
            Paladins
          </h2>
          <p className="font-oswald text-[16px] font-[400] text-white max-w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-[#FF4655] text-white py-1 px-5 font-oswald text-[16px] font-[400] mt-4">
              Know more
            </button>
            <ul className="flex gap-2 [&>li>a]:text-white [&>li]:border-[2px] [&>li]:border-black [&>li]:rounded-full [&>li]:p-[10px] [&>li]:bg-[#FF4655]">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h2 className="font-barlow text-[30px] uppercase text-white bg-[rgba(37,36,36,38%)] py-[24px] px-[20px]">
          CS:GO
        </h2>
      )}
    </div>
  );
};

export default TeamCard;
