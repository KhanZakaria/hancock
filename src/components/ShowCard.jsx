import { GoDotFill } from "react-icons/go";

const ShowCard = ({ title, text }) => {
  return (
    <div className="w-[48%] md:w-[23%] border border-gray-800 py-[33px]  px-[20px] rounded-tr-[50px] rounded-bl-[50px] bg-[#212121] my-[20px] md:my-[50px] lg:min-w-[313px] flex flex-col items-center justify-center">
      <h2 className="flex font-barlow text-[40px] md:text-[60px] text-white items-baseline gap-1">
        {title}
        <span className="text-[#FF4655] text-[16px]">
          <GoDotFill />
        </span>
      </h2>
      <p className="text-white font-oswald text-[14px] md:text-[18px] font[300] uppercase">
        {text}
      </p>
    </div>
  );
};

export default ShowCard;
