import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Tread from "../assets/traed.png";
import Button from "../assets/Button Row.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-20  mx-auto w-full  sm:px-4 bg-[#0C2027] lg:px-20 md: px-10">
      <img src={Tread} alt="/" className="" />

      <ul className="hidden items-center justify text-white md:flex">
        <li className="p-4">About</li>
        <li className="p-4 text-orange-600">Our Solutions</li>
        <li className="p-4">Sectors</li>
        <li className="p-4">Knowledge</li>
        <li className="p-4">Company</li>
        <li className="p-4">
          <img src={Button} alt="/" />
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-50 text-white">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "absolute left-0 right-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#0C2027] ease-in-out duration-500"
            : "absolute left-[-100%]"
        }
      >
        <ul className=" uppercase p-4 text-white pt-20 text-center">
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Our Solutions</li>
          <li className="p-4 border-b border-gray-600">Sectors</li>
          <li className="p-4 border-b border-gray-600">Knowledge</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <div className="flex items-center justify-end">
            <li className=" p-4 ">
              <img className="right-0 left-0" src={Button} alt="/" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
