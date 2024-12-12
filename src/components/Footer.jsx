import Logo from "./Logo";

import gallery1 from "../assets/images/gal11.png";
import gallery2 from "../assets/images/gal21.png";
import gallery3 from "../assets/images/gal31.png";
import gallery4 from "../assets/images/gal41.png";
import gallery5 from "../assets/images/gal51.png";
import gallery6 from "../assets/images/gal61.png";
import Gallery from "./Gallery";

import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#191919]">
      <div className="container">
        {/* footer top  */}
        <div className="bg-[#FF4655] py-[35px] px-[30px] md:flex justify-between items-center mt-[-120px] text-center md:text-left">
          <h2 className="font-barlow uppercase text-white text-[40px] font-[500]">
            subscribe us to get latest news in your inbox <br></br> from hancok
            community
          </h2>
          <form
            action="#"
            className="border rounded-full py-[10px] md:pl-[20px] h-[50px] overflow-hidden flex items-center justify-end w-full md:w-[400px] bg-[white] mt-5 md:mt-0"
          >
            <input
              type="email"
              placeholder="your email"
              className="bg-transparent outline-none w-[90%] pr-[10px] pl-[10px] md:pl-0 md:pr-[5px] font-barlow text-[16px] placeholder:font-barlow placeholder:text-[16px] placeholder:uppercase"
            />
            <input
              type="submit"
              value="subscribe"
              className="border rounded-full bg-[#191919]  px-[28px] py-[10px] text-white font-barlow text-[16px]  uppercase cursor-pointer h-[50px]"
            />
          </form>
        </div>
        {/* end of footer top  */}

        {/* footer middle  */}
        <div className="md:flex justify-between py-[70px]  flex-wrap text-white gap-[20px] border-b-[2px] border-[#666666]">
          <div className="md:max-w-[50%]">
            <Logo />
            <p className="font-oswald text-[16px] text-[#666666] pt-[30px] pb-[60px] uppercase">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
              officiis rem consectetur sunt cupiditate eius obcaecati, culpa,
              aspernatur aperiam id.
            </p>

            <SocialIcon />
          </div>
          <div className="md:max-w-[12%] w-full mt-[50px] md:mt-0">
            <h2 className="pb-[30px] font-barlow uppercase text-white text-[25px]">
              links
            </h2>
            <ul className=" group hover:[&>li>a]:text-[#FF4655] [&>li]:pb-[30px] flex gap-[20px] md:block text-[20px]">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/tournament">Tournament</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="md:max-w-[12%] w-full">
            <h2 className="pb-[30px] font-barlow uppercase text-white text-[25px] ">
              teams
            </h2>
            <ul className="capitalize md:uppercase  group hover:[&>li>a]:text-[#FF4655] [&>li]:mb-[30px] flex gap-[20px] md:block text-[20px]">
              <li>
                <a href="/paladins">paladins</a>
              </li>
              <li>
                <a href="/csgo">cs:go</a>
              </li>
              <li>
                <a href="/dota2">dota 2</a>
              </li>
              <li>
                <a href="/valorant">valorant</a>
              </li>
            </ul>
          </div>
          <div className="md:max-w-[20%] w-full">
            <h2 className="pb-[30px] font-barlow uppercase text-white text-[25px]">
              gallery
            </h2>
            <div>
              <ul className="flex flex-wrap ">
                <Gallery
                  link="#"
                  src={gallery1}
                  alt="image1"
                />
                <Gallery
                  link="#"
                  src={gallery2}
                  alt="image2"
                />
                <Gallery
                  link="#"
                  src={gallery3}
                  alt="image3"
                />
                <Gallery
                  link="#"
                  src={gallery4}
                  alt="image4"
                />
                <Gallery
                  link="#"
                  src={gallery5}
                  alt="image5"
                />
                <Gallery
                  link="#"
                  src={gallery6}
                  alt="image6"
                />
              </ul>
            </div>
          </div>
        </div>
        {/* end of footer middle  */}

        {/* footer bottom  */}
        <div>
          <h6 className="font-barlow text-[20px] text-white text-center py-[25px]">
            © 2021 All rights reserved by{" "}
            <span className="text-[#FF4655]">
              <a href="#">Themebea.</a>
            </span>
          </h6>
        </div>
        {/* end of footer bottom */}
      </div>
    </footer>
  );
};

export default Footer;
