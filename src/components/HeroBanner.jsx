import SocialIcon from "./SocialIcon";
import Button from "./Button";

const HeroBanner = () => {
  return (
    <div className="bg-[url('./assets/images/banner1.png')] bg-cover bg-no-repeat bg-center min-h-[100vh] md:min-h-[150vh] flex items-center">
      <div className="container">
        <div className="max-w-[400px] md:max-w-[611px]  text-white mt-[20px] md:mt-[70px]">
          <h2 className="font-oswald text-[20px] md:text-[27px] uppercase font-[400]">
            LIFE TIME
          </h2>
          <h2 className="font-oswald text-[40px] md:text-[60px] uppercase font-[600] relative">
            GAMING EXPERIENCE
            <span className="absolute after:block after:content-[''] after:h-[5px] after:w-[90px] bottom-3  md:bottom-5 right-[-40px] md:right-2 bg-white"></span>
          </h2>
          <p className="font-oswald text-[16px] md:text-[18px] font-[400] mb-[20px] md:mb-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias voluptas optio. Veritatis recusandae pariatur qui dignissimos
            dolore similique ad adipisci eum. Quos aliquid fugiat magni illum
            eius?
          </p>
          <Button />
        </div>

        <div className="pt-[50px] md:pt-[150px] pb-[20px] md:pb-[100px">
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
