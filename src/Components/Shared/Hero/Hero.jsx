import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import heroImage1 from "../../../assets/image/HERO-COVER.jpg";

const Hero = () => {
  return (
    <div
      style={{
        background: `url(${heroImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={` w-full bg-right px-28 py-40 rounded-sm`}
    >
      <p className="text-primary text-[20px] font-medium mb-5">
        Starting at $ <span className="font-bold">29.99</span>
      </p>
      <h2 className="text-[40px]  text-secondary font-manrope mb-[30px] font-bold tracking-[0.5px] leading-[50px]">
        <span>Fashion sale for</span>
        <br /> 
        <span>women's</span>
      </h2>
      <button className="bg-secondary text-[15px] flex items-center gap-[5px] text-white py-2.5 px-[15px] cursor-pointer rounded-md">
        <span>Shop Now</span>
        <HiMiniChevronDoubleRight className="text-base" />
      </button>
    </div>
  );
};

export default Hero;
