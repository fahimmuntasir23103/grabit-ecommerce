import OurIntro from "./AboutComponents/OurIntro";
import Services from "../../Components/Services/Services";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { LuBadgePercent } from "react-icons/lu";
import { LiaDonateSolid } from "react-icons/lia";
import useData from "../../hooks/useData";
import Member from "./Member/Member";

const About = () => {
    const {TeamMemersData} = useData()
  return (
    <section className="container max-w-[1600px] mx-auto my-10">
      <div className="mx-[62.5px] px-3 font-poppins text-accent text-[14px] py-2.5">
        <OurIntro />
        <div className="my-10">
          <div className="text-center xl:w-3/8 w-1/2 mx-auto">
            <h2 className="text-[26px] font-manrope text-secondary font-bold">
              <span>Our</span>
              <span className="text-primary ml-1.5 font-black">Services</span>
            </h2>
            <p className="text-[15px] font-light font-poppins text-accent tracking-[0.32px] mt-2.5 mb-10">
              Customer service should not be a department. It should be the
              entire company.
            </p>
          </div>
          <div className="flex gap-8">
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
          </div>
        </div>
        <div>
          <div class="text-center xl:w-3/8 w-1/2 mx-auto">
            <h2 class="text-[26px] font-manrope text-secondary font-bold">
              <span>Our</span>
              <span class="text-primary ml-1.5 font-black">Team</span>
            </h2>
            <p class="text-[15px] font-light font-poppins text-accent tracking-[0.32px] mt-2.5 mb-10">
              Meet out expert team members.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-[30px]">
            {TeamMemersData.map(member => <Member member={member}/>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
