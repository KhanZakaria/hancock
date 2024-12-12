const TitleRight = ({ text, position, width }) => {
  return (
    <div className=" pt-[34px] flex  justify-end">
      <div className={width}>
        <h2 className="font-oswald text-[30px] md:text-[40px] uppercase font-[600] relative text-white text-right">
          {text}
          <span
            className={`absolute after:block after:content-[''] after:h-[5px] after:w-[90px]  bottom-3 ${position} bg-[#FF4655]`}
          ></span>
        </h2>
      </div>
    </div>
  );
};

export default TitleRight;
