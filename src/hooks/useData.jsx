import React, { use } from "react";
const categoriesDataFetch = fetch("/Categories.json").then((res) => res.json());
const ProductsDataFetch = fetch("/Products.json").then((res) => res.json());
const TeamMemersDataFetch = fetch("/TeamMember.json").then((res) => res.json());
const useData = () => {
  const categoriesData = use(categoriesDataFetch);
  const productsData = use(ProductsDataFetch);
  const TeamMemersData = use(TeamMemersDataFetch);
  return { categoriesData, productsData, TeamMemersData };
};
export default useData;
