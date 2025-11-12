import React from "react";
import Hero from "../../Components/Shared/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import Collections from "./HomeComponents/Collections";
import Services from "../../Components/Services/Services";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaDonateSolid } from "react-icons/lia";
import { LuBadgePercent } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <section className="container max-w-[1600px] mx-auto my-10">
        <div className="mx-[62.5px] px-3 flex items-center justify-between font-poppins text-accent text-[13px] py-2.5">
          <Hero />
        </div>
      </section>
      <section className="container max-w-[1600px] mx-auto my-10">
        <div className="mx-[62.5px] px-3 flex items-center justify-between gap-5 font-poppins text-accent py-2.5">
          <Categories />
        </div>
      </section>
      <section className="container max-w-[1600px] mx-auto my-10">
        <div className="mx-[62.5px] px-3 flex items-center justify-between gap-5 font-poppins text-accent py-2.5">
          <Products
            heading={"Day of the"}
            subHeading={"Deal"}
            shortDescription={"Don't wait. The time will never be just right."}
            totalProduct={5}
          />
        </div>
      </section>
      <section className="container max-w-[1600px] mx-auto my-10">
        <div className="mx-[62.5px] px-3 flex items-center justify-between gap-5 font-poppins text-accent py-2.5">
          <Products
            heading={"New"}
            subHeading={"Arivals"}
            shortDescription={
              "Shop online for new arrivals and get free shipping!"
            }
            totalCategory={4}
            totalProduct={10}
          />
        </div>
      </section>

      <section className="container max-w-[1600px] mx-auto my-10">
        <div className="mx-[62.5px] px-3 font-poppins text-accent py-2.5">
          <Collections/>
        </div>
      </section>

      <section className="container max-w-[1600px] mx-auto my-10">
        <div className="mx-[62.5px] px-3 flex items-center justify-between gap-5 font-poppins text-accent py-2.5">
          {/* <div className="flex gap-8"> */}
            <Services
              title={"Free Shipping"}
              description={"Free shipping on all US order or order above $200"}
              icon={<BsTruck className="h-10 w-10 text-primary" />}
            />
            <Services
              title={"24X7 Support"}
              description={"Contact us 24 hours a day, 7 days a week"}
              icon={
                <RiCustomerService2Line className="h-10 w-10 text-primary" />
              }
            />
            <Services
              title={"30 Days Return"}
              description={"Simply return it within 30 days for an exchange"}
              icon={<LuBadgePercent className="h-10 w-10 text-primary" />}
            />
            <Services
              title={"Payment Secure"}
              description={"Contact us 24 hours a day, 7 days a week"}
              icon={<LiaDonateSolid className="h-10 w-10 text-primary" />}
            />
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
