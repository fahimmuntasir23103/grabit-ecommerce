import logo from "../../assets/image/logo.png";
import { GrLocation } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="container max-w-[1600px] mx-auto my-10">
      <div className="mx-[62.5px] grid grid-cols-6 gap-6 px-3 font-poppins text-accent py-2.5">
        <div className="col-span-2 space-y-8">
          <img className="w-36 outline-none" src={logo} alt="" />
          <p className="text-[15px] leading-7">
            Grabit is the biggest market of Cloths and Cosmetics. Get your daily
            needs from our store.
          </p>
          <div className="flex gap-4">
            <img
              className="rounded-md w-32"
              src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/app/android.png"
              alt=""
            />
            <img
              className="rounded-md w-[120px]"
              src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/app/apple.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-4 gap-6 flex-1">
          <div>
            <h2 className="text-lg text-secondary pb-4 mb-5 font-medium border-b border-b-[#eeeeee]">
              Category
            </h2>
            <ul className="space-y-3 text-[15px]">
              <li>Dairy & Milk</li>
              <li>Snack & Spice</li>
              <li>Fast Food</li>
              <li>Juice & Drinks</li>
              <li>Bakery</li>
              <li>Seafood</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-secondary pb-4 mb-5 font-medium border-b border-b-[#eeeeee]">
              Company
            </h2>
            <ul className="space-y-3 text-[15px]">
              <li>About Us</li>
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>Terms & Conditions</li>
              <li>Security Payment</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-secondary pb-4 mb-5 font-medium border-b border-b-[#eeeeee]">
              Account
            </h2>
            <ul className="space-y-3 text-[15px]">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>Return Policy</li>
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-secondary pb-4 mb-5 font-medium border-b border-b-[#eeeeee]">
              Contact
            </h2>
            <ul className="space-y-3 text-[15px]">
              <li className="flex gap-1 text-sm">
                {" "}
                <GrLocation className="text-5xl -translate-y-3 text-left text-primary" />{" "}
                <span>
                  2548 Broaddus Maple Court, Madisonville KY 4783, USA.
                </span>
              </li>
              <li className="text-sm flex items-center gap-1">
                <FaWhatsapp className="text-primary text-xl" />{" "}
                <span>+00 9876543210</span>
              </li>
              <li className="text-sm flex items-center">
                <HiOutlineEnvelope className="text-primary text-2xl " />{" "}
                <span>example@email.com</span>
              </li>

              <li className="flex gap-2">
                <span className="bg-secondary p-2 text-white rounded-sm">
                  <FaFacebookF />
                </span>
                <span className="bg-secondary p-2 text-white rounded-sm">
                  <FaTwitter />
                </span>
                <span className="bg-secondary p-2 text-white rounded-sm">
                  <FaLinkedinIn />
                </span>
                <span className="bg-secondary p-2 text-white rounded-sm">
                  <FaInstagram />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
