
const SectionHeading = ({ heading, subHeading, shortDescription,totalCategory, categoriesData, handleProducts }) => {

  return (
    <>
      <div>
        <h2 className="text-[25px] font-manrope text-secondary font-bold">
        <span>{heading}</span>
        <span className="text-primary ml-1.5">{subHeading}</span>
      </h2>
      <p className="text-sm mt-2.5">{shortDescription}</p>
      </div>
      <ul className="flex items-center gap-[50px] uppercase text-sm font-medium">
        <li onClick={()=> handleProducts(null)} className="cursor-pointer">All</li>
        {categoriesData.slice(0,totalCategory).map((category) => (
          <li key={category.id} onClick={()=>handleProducts(category)} className="cursor-pointer">{category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SectionHeading;
