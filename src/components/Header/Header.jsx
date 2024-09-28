import { Link } from "react-router-dom";
import logo from "../../assets/Imgs/logo/image.png";
import { useState, useEffect } from "react";

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
    <>
      {/* فضای خالی با ارتفاع ثابت برای جلوگیری از پرش */}
      {/* <div style={{ height: "120px" }}></div> */}

      <header className="transition-opacity duration-300">
        <nav
          className={`flex justify-between items-center px-[105px] py-[30px] w-full transition-all duration-300 transform fixed top-0 left-0 ${
            valueScroll > 0 ? "bg-white shadow-md" : "bg-coustomwhiteColors"
          }`}
          style={{ zIndex: 100 }}
        >
          <div>
            <img src={logo} alt="logo" className="w-[154px] h-[24px]" />
          </div>
          <div>
            <ul className="flex space-x-14">
              {HeaderList.map((item) => (
                <li key={item.id} className="font-medium text-[16px]">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-[14px]">
            <button className="w-[91px] h-[40px] text-coustomGreenColors">
              Login
            </button>
            <button className="w-[91px] h-[40px] bg-coustomGreenColors text-white rounded-md">
              Sign up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
