import { MdArrowRightAlt } from "react-icons/md";
import logo from "../../assets/Imgs/logo/image copy.png";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { TfiTwitter } from "react-icons/tfi";
import { PiYoutubeLogo } from "react-icons/pi";
import { IoBasketballOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  return (
    <section>
      <div>
        {/* Demo section */}
        <div className="flex flex-col justify-center items-center  mt-12 px-4 py-8">
          <h1 className="lg:text-6xl text-3xl font-semibold text-zinc-800">
            Pellentesque suscipit
            <span className="block leading-[4rem] lg:leading-[7rem]">
              fringilla libero eu.
            </span>
          </h1>
          <div className="flex justify-center items-center bg-coustomGreenColors w-[178px] h-[52px] mt-6 rounded-md">
            <button className="text-white text-base">Get a Demo</button>
            <MdArrowRightAlt className="text-white w-4 h-4 ml-2" />
          </div>
        </div>

        {/* Footer links and social media section */}
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center bg-coustomebackgroundfooter lg:px-[165px] px-4 py-16">
          <div className="text-white text-base space-y-10 mb-10 lg:mb-0  lg:text-left">
            <img src={logo} alt="logo" className="w-[191px]  lg:mx-0" />
            <span className="block text-sm">
              Copyright © 2020 Landify UI Kit.
            </span>
            <span className="leading-10 text-sm">All rights reserved</span>
            <ul className="flex  lg:justify-start">
              <li>
                <Link>
                  <RxInstagramLogo className="w-8 h-8 bg-white/10 rounded-full mr-4 p-2 flex" />
                </Link>
              </li>
              <li>
                <Link>
                  <IoBasketballOutline className="w-8 h-8 bg-white/10 rounded-full mr-4 p-2 flex" />
                </Link>
              </li>
              <li>
                <Link>
                  <TfiTwitter className="w-8 h-8 bg-white/10 rounded-full mr-4 p-2 flex" />
                </Link>
              </li>
              <li>
                <Link>
                  <PiYoutubeLogo className="w-8 h-8 bg-white/10 rounded-full mr-4 p-2 flex" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Links and subscribe section */}
          <div className="flex flex-col lg:flex-row text-white gap-[30px]  lg:text-left">
            <ul className="space-y-3">
              <li className="text-white font-semibold text-xl mb-3">Company</li>
              <li className="text-sm font-thin cursor-pointer">About us</li>
              <li className="text-sm font-thin cursor-pointer">Contact us</li>
              <li className="text-sm font-thin cursor-pointer">Pricing</li>
              <li className="text-sm font-thin cursor-pointer">Testimonials</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-white font-semibold text-xl mb-3">Support</li>
              <li className="text-sm font-thin cursor-pointer">Help center</li>
              <li className="text-sm font-thin cursor-pointer">
                Terms of service
              </li>
              <li className="text-sm font-thin cursor-pointer">Legal</li>
              <li className="text-sm font-thin cursor-pointer">
                Privacy policy
              </li>
              <li className="text-sm font-thin cursor-pointer">Status</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-white font-semibold text-xl mb-3">
                Stay up to date
              </li>
              <li className="flex items-center px-4 py-2.5 rounded-lg w-full bg-white/10">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="placeholder:text-white font-normal bg-transparent text-sm outline-none flex-grow"
                />
                <BsSend className="text-white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
