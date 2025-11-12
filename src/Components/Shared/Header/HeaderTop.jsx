import { FiPhoneCall, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="bg-[#f8f8fb]">
      <div className="container max-w-[1600px] mx-auto">
        <div className="mx-[62.5px] px-3 flex items-center justify-between font-poppins text-accent text-[13px] py-2.5">
          <div className="flex items-center">
            <div className="flex items-center gap-2 mr-[15px]">
              <FiPhoneCall className="text-base" />
              <span>+91 987 654 3210</span>
            </div>
            <div className="flex items-center gap-2 mr-[15px]">
              <FaWhatsapp className="text-base" />
              <span>+91 987 654 3210</span>
            </div>
          </div>
          <div>
            <p>World's Fastest Online Shopping Destination</p>
          </div>
          <ul className="flex items-center gap-5">
            <li>Help?</li>
            <li>Track Order?</li>
            <li className="flex items-center gap-1">
              <span>English</span>
              <FiChevronDown />
            </li>
            <li className="flex items-center gap-1">
              <span>Dollar</span>
              <FiChevronDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
