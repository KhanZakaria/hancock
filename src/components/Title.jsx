const Title = ({ text, position, font }) => {
  return (
    <div className="max-w-[500px] pt-[34px] pb-[57px]">
      <h2
        className={`font-oswald ${
          font ? font : "text-[30px] md:text-[40px]"
        } uppercase font-[600] relative text-white`}
      >
        {text}
        <span
          className={`absolute after:block after:content-[''] after:h-[5px] after:w-[90px] bottom-3  bg-[#FF4655] ${position}`}
        ></span>
      </h2>
    </div>
  );
};

export default Title;
