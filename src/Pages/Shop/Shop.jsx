import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import useData from "../../hooks/useData";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";

const Shop = () => {
  const { categoriesData, productsData } = useData();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedWidths, setSelectedWidths] = useState([]);

  // Get unique widths
  const productsWidth = productsData.map((productData) => productData.width);
  const width = [...new Set(productsWidth)];

  // Handle category filter
  const handleCategoryCheck = (e) => {
    const id = e.target.value;

    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, id]);
    } else {
      setSelectedCategories(selectedCategories.filter((catId) => catId !== id));
    }
  };

  // Handle width filter
  const handleWidthCheck = (e) => {
    const widthName = e.target.value;

    if (e.target.checked) {
      setSelectedWidths([...selectedWidths, widthName]);
    } else {
      setSelectedWidths(selectedWidths.filter((w) => w !== widthName));
    }
  };

  // Apply filters
  let filteredProducts = productsData;

  // Apply category filter
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.categoryId.toString())
    );
  }

  // Apply width filter
  if (selectedWidths.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedWidths.includes(product.width)
    );
  }

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedWidths([]);
  };

  return (
    <section className="container max-w-[1600px] mx-auto my-10">
      <div className="mx-[62.5px] px-3 grid grid-cols-12 gap-6 font-poppins text-accent text-[14px] py-2.5">
        <div className="col-span-3">
          <div className="border border-neutral p-4">
            <div className="flex items-center justify-between pb-2.5 border-b border-b-neutral">
              <h2 className="text-[17px] text-secondary font-bold">Category</h2>
              <FiChevronDown className="text-lg" />
            </div>
            <ul className="flex flex-col gap-4 mt-4">
              {categoriesData.map((category) => (
                <li key={category.id} className="flex items-center">
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      onChange={handleCategoryCheck}
                      value={category.id}
                      type="checkbox"
                      checked={selectedCategories.includes(
                        category.id.toString()
                      )}
                      className="peer appearance-none w-4 h-4 border border-primary rounded-sm
                    checked:bg-primary checked:border-primary"
                    />
                    <span className="ml-2 peer-checked:text-primary">
                      {category.name}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-neutral p-4 mt-2">
            <div className="flex items-center justify-between pb-2.5 border-b border-b-neutral">
              <h2 className="text-[17px] text-secondary font-bold">Width</h2>
              <FiChevronDown className="text-lg" />
            </div>
            <ul className="flex flex-col gap-4 mt-4">
              {width.map((w, idx) => (
                <li key={idx} className="flex items-center">
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      onChange={handleWidthCheck}
                      value={w}
                      type="checkbox"
                      checked={selectedWidths.includes(w)}
                      className="peer appearance-none w-4 h-4 border border-primary rounded-sm
                    checked:bg-primary checked:border-primary"
                    />
                    <span className="ml-2 peer-checked:text-primary">{w}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleReset}
            className="bg-red-500 text-white w-full py-3 cursor-pointer mt-2 rounded-xs outline-none"
          >
            Reset All
          </button>
        </div>
        <div className="col-span-9 grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
