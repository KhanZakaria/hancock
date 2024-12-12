import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialIcon = () => {
  return (
    <ul className="flex gap-3 [&>li>a]:text-white [&>li>a]:border-2 [&>li>a]:rounded-full [&>li>a]:flex [&>li>a]:items-center [&>li>a]:justify-center [&>li>a]:bg-[#212529] [&>li>a]:h-[30px] md:[&>li>a]:h-[60px] [&>li>a]:w-[30px] md:[&>li>a]:w-[60px] [&>li>a]:text-[15px] md:[&>li>a]:text-[30px] group hover:[&>li>a]:bg-[#FF4655]  hover:[&>li>a]:text-white hover:[&>li>a]:transition hover:[&>li>a]:ease-in-out hover:[&>li>a]:delay-150">
      <li>
        <a href="">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcon;
