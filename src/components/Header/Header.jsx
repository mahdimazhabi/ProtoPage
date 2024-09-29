import { Link } from "react-router-dom";
import logo from "../../assets/Imgs/logo/image.png";
import { useState, useEffect } from "react";
import "../../index.css";

const Header = () => {
  const HeaderList = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Service", path: "/Service" },
    { id: 3, title: "Feature", path: "/Feature" },
    { id: 4, title: "Product", path: "/Product" },
    { id: 5, title: "Testimonial", path: "/Testimonial" },
    { id: 6, title: "FAQ", path: "/FAQ" },
  ];

  const [valueScroll, setValueScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setValueScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="transition-opacity duration-300">
      <nav
        className={`flex justify-between items-center overflow-auto px-4 md:px-[105px] py-[20px] md:py-[30px] w-full transition-all duration-300 transform fixed top-0 left-0 ${
          valueScroll > 0 ? "bg-white shadow-md" : "bg-coustomwhiteColors"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex">
          <img
            src={logo}
            alt="logo"
            className="w-[500px] h-[24px] md:w-[154px] flex-shrink-0"
          />
        </div>
        <div className=" md:flex overflow-x-auto scrollbar-custom">
          <ul className="flex space-x-6 md:space-x-14">
            {HeaderList.map((item) => (
              <li
                key={item.id}
                className="font-medium text-[14px] md:text-[16px]"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-x-2 md:space-x-[14px] flex items-center">
          <button className="w-[80px] h-[35px] text-coustomGreenColors text-[14px] md:w-[91px] md:h-[40px]">
            Login
          </button>
          <button className="w-[80px] h-[35px] bg-coustomGreenColors text-white rounded-md text-[14px] md:w-[91px] md:h-[40px]">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
