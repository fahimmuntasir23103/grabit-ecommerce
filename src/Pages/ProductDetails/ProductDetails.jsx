import React, { useState } from "react";
import { useParams } from "react-router";
import useData from "../../hooks/useData";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { productsData } = useData();
  const findProduct = productsData.find((product) => product.id == id);
  const {
    name,
    image,
    mrp,
    price,
    ratings,
    discount,
    sku,
    stock,
    description,
    closure,
    sole,
    width,
    outerMaterial,
    weightOptions,
    quantity,
  } = findProduct;
  const [count, setCount] = useState(quantity);
  console.log(findProduct);

  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    setPos({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    });
  };
  const handleCounterIncrease = () => {
    setCount(count + 1);
  };
  const handleCounterDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <section className="container max-w-[1600px] mx-auto my-10">
      <div className="mx-[62.5px] px-3 grid grid-cols-12 gap-6 font-poppins text-accent text-[14px] py-2.5">
        <div className="col-span-5 border border-neutral overflow-hidden bg-[#f7f7f7]">
          <img
            style={{
              transformOrigin: `${pos.x}% ${pos.y}%`,
            }}
            onMouseMove={handleMove}
            className="cursor-zoom-in transition-transform duration-300 hover:scale-150"
            src={image}
            alt=""
          />
        </div>
        <div className="col-span-7">
          <h2 className="text-[22px] font-medium text-secondary mb-5 cursor-[zoom_in]">
            {name}
          </h2>
          <div className="flex items-center gap-[15px] mb-3.5">
            <div className="flex text-[#7e7e7e]">
              <FaStar className="text-[#FDC040]" />
              <FaStar className="text-[#FDC040]" />
              <FaStar className="text-[#FDC040]" />
              <FaStar className="text-[#FDC040]" />
              <CiStar />
            </div>
            <div className="bg-semantic w-0.5 h-4"></div>
            <span>{ratings} Ratings</span>
          </div>
          <div className="flex items-center gap-[15px] py-[15px] mb-[15px]">
            <div>
              <div className="mb-[15px]">
                <span className="text-[22px] text-secondary mb-[15px] font-semibold">
                  ${price}
                </span>
                <span className="text-primary text-lg ml-[15px] font-medium">
                  -{discount}%
                </span>
              </div>
              <p className="text-base text-accent">
                M.R.P:<span className="line-through">${mrp}</span>
              </p>
            </div>
            <div className="flex w-full flex-col items-end justify-between">
              <span className="text-[22px] text-secondary mb-[15px] font-semibold">
                SKU#{sku}
              </span>
              <span className="text-primary text-base">{stock}</span>
            </div>
          </div>
          <p>{description}</p>
          <ul className="space-y-2.5 my-2.5">
            <li className="flex items-center gap-2">
              <span className="font-semibold">Closure: </span>
              <span>{closure}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">sole: </span>
              <span>{sole}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">width: </span>
              <span>{width}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">outerMaterial: </span>
              <span>{outerMaterial}</span>
            </li>
          </ul>
          <div className="mb-6">
            <h3 className="uppercase font-bold text-secondary text-[15px] mb-2.5">
              weight
            </h3>
            <div className="space-x-2">
              {weightOptions.map((option, idx) => (
                <button
                  key={idx}
                  className="border border-neutral py-[5px] hover:bg-primary hover:text-white duration-200 cursor-pointer px-2.5 rounded-md text-xs text-secondary"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center border border-neutral gap-4 mt-[5px] rounded-md">
              <span
                className="cursor-pointer p-2.5"
                onClick={handleCounterDecrease}
              >
                -
              </span>
              <span>{count}</span>
              <span
                className="cursor-pointer p-2.5"
                onClick={handleCounterIncrease}
              >
                +
              </span>
            </div>
            <button className="bg-secondary hover:bg-primary cursor-pointer duration-200 rounded-md font-semibold uppercase text-white text-sm py-2.5 px-[15px]">
              add to cart
            </button>
            <div className="flex">
              <div className="border border-neutral p-1.5 rounded-sm cursor-pointer hover:bg-primary hover:text-white duration-100">
                <IoMdHeartEmpty className="text-2xl p-0.5" />
              </div>
              <div className="border border-neutral p-1.5 rounded-sm cursor-pointer hover:bg-primary hover:text-white duration-100">
                <AiOutlineEye className="text-2xl p-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[62.5px] px-3 py-2.5 mt-16">
        <div className="text-center">
          <h2 className="text-[26px] font-manrope text-secondary font-bold">
            <span>Related</span>
            <span className="text-primary ml-1.5">Products</span>
          </h2>
          <p className="text-sm font-poppins text-accent tracking-[0.32px] mt-2.5 mb-10">
            Browse The Collection of Top Products
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 ">
          {productsData.slice(0, 6).map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
