import icon1 from "../../assets/Imgs/Achievements/icon1.png";
import icon2 from "../../assets/Imgs/Achievements/icon2.png";
import icon3 from "../../assets/Imgs/Achievements/icon3.png";
import icon4 from "../../assets/Imgs/Achievements/icon4.png";

const Achievements = () => {
  return (
    <section className="bg-coustomwhiteColors">
      <div className="lg:flex justify-between items-center lg:px-[144px] px-5 py-[64px]">
        {/* Left section */}
        <div className="mb-10 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left text-coustomZinkColors font-semibold mb-2">
            Helping a local{" "}
            <span className="block text-coustomGreenColors">
              business reinvent itself
            </span>
          </h1>
          <p className="text-sm sm:text-base text-center">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right section with statistics */}
        <div className="grid grid-cols-2 gap-6 lg:gap-10">
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={icon1}
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt="Members"
              />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-2xl sm:text-[30px] font-bold text-coustomZinkColors">
                  2,245,341
                </span>
                <span className="text-sm sm:text-base font-normal text-coustomGrayColors">
                  Members
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={icon2}
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt="Clubs"
              />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-2xl sm:text-[30px] font-bold text-coustomZinkColors">
                  46,328
                </span>
                <span className="text-sm sm:text-base font-normal text-coustomGrayColors">
                  Clubs
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={icon3}
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt="Event Bookings"
              />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-2xl sm:text-[30px] font-bold text-coustomZinkColors">
                  828,867
                </span>
                <span className="text-sm sm:text-base font-normal text-coustomGrayColors">
                  Event Bookings
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={icon4}
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt="Payments"
              />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-2xl sm:text-[30px] font-bold text-coustomZinkColors">
                  1,926,436
                </span>
                <span className="text-sm sm:text-base font-normal text-coustomGrayColors">
                  Payments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
