import { AiOutlineEye } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiArrowShuffle } from "react-icons/ti";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  // console.log(primary)
  const { name, image, mrp, price, categoryName, ratings, id } = product;

  return (
    <div className="relative group overflow-hidden cursor-pointer border border-[#ececec] hover:border-[#BCE3C9] duration-300 max-w-80 rounded-sm hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)]">
      {/* label */}
      <span className="absolute top-2.5 left-2.5 py-[5px] px-2.5 rounded-xs z-10 text-xs font-normal text-white capitalize bg-primary">
        new
      </span>

      <div className="overflow-hidden aspect-square ">
        {/* hover things of image */}

        <div className="group-hover:opacity-100 opacity-0 duration-300 absolute group-hover:top-1/2 top-5/9 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-base rounded-[5px] flex gap-2">
          <span className="group/icon relative bg-white text-accent border border-neutral rounded-md duration-300 cursor-pointer">
            <IoMdHeartEmpty className="text-[26px] p-1" />
            <span className="group-hover/icon:opacity-100 opacity-0 z-20 duration-300 absolute -left-[46px] -top-5 group-hover/icon:-top-10 bg-white  w-[120px] text-center px-2.5 py-[7px] text-[11px] rounded-[5px]">
              <span>Add To Wishlist</span>
              <span className="h-3 w-3 rotate-45 bg-white absolute left-1/2 -translate-x-1/2 -bottom-1"></span>
            </span>
          </span>

          <span className="group/icon relative bg-white text-accent border border-neutral rounded-md duration-300 cursor-pointer">
            <AiOutlineEye className="text-[26px] p-1" />
            <span className="group-hover/icon:opacity-100 opacity-0 duration-300 absolute -left-[35px] -top-5 group-hover/icon:-top-10 bg-white  w-[95px] text-center px-2.5 py-[7px] text-[11px] rounded-[5px]">
              <span>Quick view</span>
              <span className="h-3 w-3 rotate-45 bg-white absolute left-1/2 -translate-x-1/2 -bottom-1"></span>
            </span>
          </span>

          <span className="group/icon relative bg-white text-accent border border-neutral rounded-md duration-300 cursor-pointer">
            <TiArrowShuffle className="text-[26px] p-1" />
            <span className="group-hover/icon:opacity-100 opacity-0 duration-300 absolute -left-[35px] -top-5 group-hover/icon:-top-10 bg-white  w-[95px] text-center px-2.5 py-[7px] text-[11px] rounded-[5px]">
              <span>Compare</span>
              <span className="h-3 w-3 rotate-45 bg-white absolute left-1/2 -translate-x-1/2 -bottom-1"></span>
            </span>
          </span>

          <span className="group/icon relative bg-white text-accent border border-neutral rounded-md duration-300 cursor-pointer">
            <TbShoppingBagPlus className="text-[26px] p-1" />
            <span className="group-hover/icon:opacity-100 opacity-0 duration-300 absolute -left-[35px] -top-5 group-hover/icon:-top-10 bg-white  w-[95px] text-center px-2.5 py-[7px] text-[11px] rounded-[5px]">
              <span>Add To Cart</span>
              <span className="h-3 w-3 rotate-45 bg-white absolute left-1/2 -translate-x-1/2 -bottom-1"></span>
            </span>
          </span>
        </div>

        {/* image */}
        <img
          src={image}
          alt=""
          className="w-full h-full transition-all duration-700 group-hover:scale-105 ease-in-out cursor-pointer"
        />
      </div>

      <div className="text-[14px] font-poppins p-5">
        <p className="text-semantic text-[13px] font-manrope mb-2.5 cursor-pointer hover:text-primary duration-300">
          {categoryName}
        </p>

        <Link to={`/shop/${id}`}>
        <h2 title={name} className="text-secondary line-clamp-1 font-medium mb-2.5 cursor-pointer hover:text-primary duration-200">
          {name}
        </h2>
        </Link>

        <div className="flex items-center gap-[5px] mb-1">
          <div className="flex text-[#7e7e7e]">
            <FaStar className="text-[#FDC040]" />
            <FaStar className="text-[#FDC040]" />
            <FaStar className="text-[#FDC040]" />
            <FaStar className="text-[#FDC040]" />
            <CiStar />
          </div>
          <span>({ratings})</span>
        </div>
        <div className="font-bold mt-2.5 pt-[5px]">
          <span className=" text-secondary">${price}</span>
          <span className="font-normal line-through ml-2">${mrp}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
