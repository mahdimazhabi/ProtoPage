import { Link } from "react-router-dom";
import logo from "../../assets/Imgs/logo/image.png";

const HeaderList = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Service", path: "/Service" },
  { id: 3, title: "Feature", path: "/Feature" },
  { id: 4, title: "Product", path: "/Product" },
  { id: 5, title: "Testimonial", path: "/Testimonial" },
  { id: 6, title: "FAQ", path: "/FAQ" },
];

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between  bg-coustomwhiteColors py-[30px]  px-[105px] items-center">
        <div>
          <img src={logo} alt="logo" className="w-[154px] h-[24px]" />
        </div>
        <div>
          <ul className="flex space-x-14">
            {HeaderList.map((Items) => (
              <li key={Items.id} className="font-medium text-[16px] ">
                <Link to={Items.path}>{Items.title}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-x-[14px]">
          <button className="w-[91px] h-[40px] text-coustomGreenColors ">
            Login
          </button>
          <button className="w-[91px] h-[40px] bg-coustomGreenColors text-white rounded-md">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
