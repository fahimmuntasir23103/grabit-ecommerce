import { BiCategory } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { NavLink } from "react-router";

const HeaderBottom = () => {
  return (
    <div className="border border-neutral">
      <div className="container max-w-[1600px] mx-auto">
        <div className="mx-[62.5px] px-3 flex items-center justify-between font-poppins text-secondary text-[15px] py-1.5 font-medium">
          <div className="flex items-center bg-primary text-white py-3 px-[15px] rounded-md gap-2.5">
            <BiCategory className="text-xl" />
            <span>All Categories</span>
            <FiChevronDown className="text-lg" />
          </div>
          <ul className="flex items-centr gap-6">
            <NavLink to="/">
              <li className="flex items-center gap-1">
                <span>Home</span>
                <FiChevronDown className="text-lg" />
              </li>
            </NavLink>
            <NavLink to="/shop">
              <li className="flex items-center gap-1">
                <span>Shop</span>
                <FiChevronDown className="text-lg" />
              </li>
            </NavLink>

            <NavLink to="/categories">
              <li className="flex items-center gap-1">
                <span>Categories</span>
                <FiChevronDown className="text-lg" />
              </li>
            </NavLink>

            <NavLink to="/blogs">
              <li className="flex items-center gap-1">
                <span>Blogs</span>
                <FiChevronDown className="text-lg" />
              </li>
            </NavLink>
            <NavLink to="/about">
              <li className="flex items-center gap-1">
                <span>About</span>
                <FiChevronDown className="text-lg" />
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="flex items-center gap-1">
                <span>Contact</span>
              </li>
            </NavLink>
          </ul>
          <div className="flex items-center bg-primary text-white py-3 px-[15px] rounded-md gap-2.5">
            <LuMapPin className="text-xl" />
            <span className="pr-5">New York</span>
            <FiChevronDown className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
