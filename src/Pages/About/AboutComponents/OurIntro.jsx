import aboutImage1 from "../../../assets/image/about.png";
import aboutImage2 from "../../../assets/image/about-2.png";
import aboutImage3 from "../../../assets/image/about-3.png";

const OurIntro = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 place-items-center gap-6">
      <div className="grid grid-cols-2 col-span-1 gap-6">
        <img
          className="col-span-1 aspect-square h-full rounded-md"
          src={aboutImage1}
          alt=""
        />
        <div className="col-span-1 grid gap-6">
          <img className="rounded-md" src={aboutImage2} alt="" />
          <img className="rounded-md" src={aboutImage3} alt="" />
        </div>
      </div>
      <div className="col-span-1">
        {/*  */}
        <div className="space-y-4 font-normal tracking-[0.32px] leading-7">
          <h2 className="text-[26px] font-manrope text-secondary font-bold tracking-[0.16px]">
            <span>Who We</span>
            <span className="text-primary ml-1.5 font-black">Are?</span>
          </h2>
          <p className="text-lg font-medium uppercase font-poppins text-accent">
            We’re here to serve only the best products for you. Enriching your
            homes with the best essentials.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Lorem Ipsum has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurIntro;
