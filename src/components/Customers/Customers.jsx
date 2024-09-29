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
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:px-[144px] px-5 py-[33px] bg-coustomwhiteColors lg:space-x-20">
        {/* Image Section */}
        <div className="mb-8 lg:mb-0">
          <img
            src={Img}
            alt="Img Tesla"
            className="w-[80%] sm:w-[326px] mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-[748px] text-center lg:text-left">
          <p className="text-coustomZinkColors text-sm sm:text-base">
            “We have enjoyed working with the JustGo system to setup and go live
            with our new membership platform. The initial effort to organise it
            along the lines of how our sport currently works was quick and
            relatively easy. The new system has already massively improved the
            time and effort it takes to setup and process member and club
            applications. It will help us to communicate with people in our
            sport in a much more effective way, and collect data to help us
            improve how our sport is governed.”
          </p>
          <span className="text-coustomGreenColors text-lg font-semibold block mt-4">
            Tim Smith
          </span>
          <p className="mt-2 text-coustomGrayColors text-sm sm:text-base">
            British Dragon Boat Racing Association
          </p>

          {/* Icons and Call to Action */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center  lg:space-x-[41px] space-y-4 lg:space-y-0 mt-8">
            {Icons.map((Index) => (
              <img
                key={Index.id}
                src={Index.img}
                alt="icons"
                className="w-[48px] h-[48px]"
              />
            ))}
            <div className="flex items-center space-x-2 cursor-pointer mt-4 lg:mt-0">
              <span className="text-base font-semibold text-coustomGreenColors">
                Meet all customers
              </span>
              <MdArrowRightAlt className="w-6 h-6 text-coustomGreenColors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
