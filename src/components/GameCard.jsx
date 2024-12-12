const GameCard = ({ image, title, subtitle }) => {
  return (
    <div className="text-white m-[20px] md:m-0">
      <img
        src={image}
        alt="cardImage1"
        className="w-full md:w-auto"
      />
      <h2 className="mt-[18px] font-barlow text-[22px] capitalize">{title}</h2>
      <h3 className="mt-[18px] font-oswald text-[16px] text-[#666666] capitalize">
        {subtitle}
      </h3>
      <div className="flex gap-[10px] items-center mt-[18px]">
        <div className="p-[5px] bg-[#FF4655] flex items-center justify-center">
          -40
        </div>
        <div>
          <del>99</del>
        </div>
        <div>100</div>
      </div>
    </div>
  );
};

export default GameCard;
