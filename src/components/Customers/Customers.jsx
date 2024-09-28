import Img from "../../assets/Imgs/Customers/image.png";
import icon1 from "../../assets/Imgs/Our Clients/logo1.png";
import icon2 from "../../assets/Imgs/Our Clients/logo2.png";
import icon3 from "../../assets/Imgs/Our Clients/logo3.png";
import icon4 from "../../assets/Imgs/Our Clients/logo4.png";
import icon5 from "../../assets/Imgs/Our Clients/logo5.png";
import icon6 from "../../assets/Imgs/Our Clients/logo6.png";
import { MdArrowRightAlt } from "react-icons/md";

const Customers = () => {
  const Icons = [
    { id: 1, img: icon1 },
    { id: 2, img: icon2 },
    { id: 3, img: icon3 },
    { id: 4, img: icon4 },
    { id: 5, img: icon5 },
    { id: 6, img: icon6 },
  ];
  return (
    <section>
      <div className="flex justify-between items-center px-[144px] py-[33px] bg-coustomwhiteColors space-x-20">
        <div>
          <img src={Img} alt="Img Tesla" className="w-[326px]" />
        </div>
        <div className="w-[748px]">
          <p className="text-coustomZinkColors text-base ">
            “We have enjoyed working with the JustGo system to setup and go live
            with our new membership platform. The initial effort to organise it
            along the lines of how our sport currently works was quick and
            relatively easy. The new system has already massively improved the
            time and effort it takes to setup and process member and club
            applications. It will help us to communicate with people in our
            sport in a much more effective way, and collect data to help us
            improve how our sport is governed.”
          </p>
          <span className="text-coustomGreenColors text-lg font-semibold">
            Tim Smith
          </span>
          <p className="mt-4 text-coustomGrayColors text-base">
            British Dragon Boat Racing Association
          </p>
          <div className="flex items-center space-x-[41px] mt-8">
            {Icons.map((Index) => (
              <img
                key={Index.id}
                src={Index.img}
                alt="icons"
                className="w-[48px] h-[48px]"
              />
            ))}
            <div className="flex items-center space-x-2 cursor-pointer ">
              <span className="text-base font-semibold text-coustomGreenColors">
                Meet all customers
              </span>
              <MdArrowRightAlt className="w-6 h-6 relative top-0.5 text-coustomGreenColors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
