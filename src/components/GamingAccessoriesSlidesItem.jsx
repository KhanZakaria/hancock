const GamingAccessoriesSlidesItem = ({ price, img, title }) => {
  return (
    <div className=" bg-[#212121] flex flex-col items-center justify-center py-[10px] md:py-[24px] px-[20px]  md:px-[32px]">
      <h2 className="font-oswald text-[40px] text-white">${price}</h2>
      <img
        src={img}
        alt="image"
      />
      <h2 className="font-oswald text-[25px] text-white capitalize mt-[15px] md:mt-[33px]">
        {title}
      </h2>
      <button className="font-oswald text-[16px] uppercase text-[#FF4655]">
        Add To Cart
      </button>
    </div>
  );
};

export default GamingAccessoriesSlidesItem;
