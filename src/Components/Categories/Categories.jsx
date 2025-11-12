import React from "react";
import useData from "../../hooks/useData";

const Categories = () => {
  const { categoriesData } = useData();
  return (
    <>
      {categoriesData.map((category) => (
        <div key={category.id} className="relative bg-[#f7f7f7] text-center p-[15px] w-full">
          <img
            className="w-[50px] my-2.5 mx-auto"
            src={category.image}
            alt=""
          />
          <div>
            <h3 className="text-[15px] font-manrope text-secondary font-bold">
              {category.name}
            </h3>
            <p className="text-[13px] font-light">{category.items} Items</p>
          </div>
          {category.discount > 0 && <span className="absolute top-0 right-0 bg-primary text-white text-[12px] px-[5px]">{category.discount}%</span>}
        </div>
      ))}
    </>
  );
};

export default Categories;
