import React, { useState } from "react";
import useData from "../../hooks/useData";
import ProductCard from "../Shared/ProductCard/ProductCard";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";

const Products = (props) => {
  const { productsData, categoriesData } = useData();
  const [products, setProducts] = useState(productsData);
  const { totalProduct } = props;

  const handleProducts = (category) => {
    let productsFilter = products;
    if (category) {
      productsFilter = productsData?.filter(
        (product) => product.categoryId == category.id
      );
    }
    const sortProducts = (category ? [...productsFilter] : productsData).sort(
      (a, b) => b.ratings - a.ratings
    );  
    setProducts(sortProducts);
  };
  return (
    <div>
      <div className="flex items-start  justify-between">
        <SectionHeading
          handleProducts={handleProducts}
          categoriesData={categoriesData}
          {...props}
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
        {products.slice(0, totalProduct ? totalProduct : 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
