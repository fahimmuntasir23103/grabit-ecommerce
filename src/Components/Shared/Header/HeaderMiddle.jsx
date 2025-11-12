import { LuUserRound } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import { PiHeartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";



import logo from "../../../assets/image/logo.png";
import { Link } from "react-router";

const HeaderMiddle = () => {
  return (
    <div className="py-[30px]">
      <div className="container max-w-[1600px] mx-auto">
        <div className="mx-[62.5px] px-3 flex items-center justify-between font-poppins text-secondary text-[13px]">
          <Link to="/">
          <img className="w-36 outline-none" src={logo} alt="" /></Link>
          <div className="w-[440px] h-[50px] relative">
            <input
              className="outline-none w-full h-full pl-4 pr-15 border border-neutral rounded-[5px] text-accent"
              type="text"
              placeholder="Search Products..."
            />
            <FiSearch className="absolute top-1/2 -translate-y-1/2 text-[18px] right-4"/>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-2.5">
              <LuUserRound className="text-2xl" />
              <div className="flex flex-col font-medium">
                <span className="text-xs text-accent tracking-[0.6px]">Account</span>
                <span className="uppercase tracking-[0.32px]">Login</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <PiHeartBold className="text-2xl" />
              <div className="flex flex-col font-medium">
                <span className="text-xs text-accent tracking-[0.6px]">Wishlist</span>
                <p className="uppercase tracking-[0.32px]">
                  <span className="font-bold">3</span>
                  <span>-items</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <RiShoppingBagLine className="text-2xl" />
              <div className="flex flex-col font-medium">
                <span className="text-xs text-accent tracking-[0.6px]">Cart</span>
                <p className="uppercase tracking-[0.32px]">
                  <span className="font-bold">3</span>
                  <span>-items</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
