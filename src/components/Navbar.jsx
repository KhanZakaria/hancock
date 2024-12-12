import Logo from "./Logo";
import { FaGlobe } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-black text-white font-oswald text-[16px]">
      <div className="container flex  justify-start items-center min-h-24 ">
        <Logo />
        <div className="flex justify-between items-center w-full  ml-14">
          <ul className="flex  gap-8 items-center group hover:[&>li]:text-white">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#tournament">Tornament</a>
            </li>
            <li>
              <a href="#store">Store</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <ul className="flex  gap-8 items-center group hover:[&>li]:text-white">
            <li>
              <a
                href=""
                className="text-[20px]"
              >
                <FaGlobe />
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex gap-1 items-center"
              >
                <span className="text-[20px]">
                  <FaSignOutAlt />
                </span>
                <span>sign in</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[20px]"
              >
                <FaSearch />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
