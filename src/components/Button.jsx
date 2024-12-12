import { FaAngleDoubleRight } from "react-icons/fa";

const Button = () => {
  return (
    <button>
      <a
        href="#"
        className="py-[12px] md:py-[13px] px-[16px] md:px-[24px] font-oswald text-[16px] font-[400] text-black bg-white flex items-center gap-[5px] justify-center capitalize"
      >
        view more
        <FaAngleDoubleRight />
      </a>
    </button>
  );
};

export default Button;
