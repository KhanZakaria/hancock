import { GoDotFill } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const VideoCard = ({ title, shortTilte, cover }) => {
  return (
    <div
      className={`${cover} bg-cover bg-center text-white  relative flex items-baseline m-[20px] md:m-0`}
    >
      <div className="flex justify-between min-w-[427px] min-h-[275px] items-end p-[25px] ">
        <div className="flex flex-col gap-1">
          <h2 className="font-barlow text-[22px] font-[600] uppercase leading-none">
            {title}
          </h2>
          <h3 className="font-oswald text-[16px] uppercase font-[100] leading-none">
            {shortTilte}
          </h3>
        </div>
        <div>
          <h2 className="flex gap-1 items-center font-oswald text-[16px] font-[400]">
            <span className="text-[#FF4655] text-[16px]">
              <GoDotFill />
            </span>
            live
          </h2>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full h-[60px] w-[60px] p-[10px] border-white flex items-center justify-center cursor-pointer">
        <FaPlay />
      </div>
    </div>
  );
};

export default VideoCard;
