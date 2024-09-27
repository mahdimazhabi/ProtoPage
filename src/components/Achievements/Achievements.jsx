import icon1 from "../../assets/Imgs/Achievements/icon1.png";
import icon2 from "../../assets/Imgs/Achievements/icon2.png";
import icon3 from "../../assets/Imgs/Achievements/icon3.png";
import icon4 from "../../assets/Imgs/Achievements/icon4.png";

const Achievements = () => {
  return (
    <section className="bg-coustomwhiteColors">
      <div className="flex justify-between items-center px-[144px] py-[64px]">
        {/* Left section */}
        <div>
          <h1 className="text-4xl text-coustomZinkColors font-semibold mb-2">
            Helping a local{" "}
            <span className="block text-coustomGreenColors">
              business reinvent itself
            </span>
          </h1>
          <span className="text-base">
            We reached here with our hard work and dedication
          </span>
        </div>

        {/* Right section with statistics */}
        <div className="grid grid-cols-2 mb-10 gap-10">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={icon1} className="w-12 h-12" alt="Members" />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-[30px] font-bold text-coustomZinkColors">
                  2,245,341
                </span>
                <span className="text-base font-normal text-coustomGrayColors">
                  Members
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <img src={icon2} className="w-12 h-12" alt="Clubs" />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-[30px] font-bold text-coustomZinkColors">
                  46,328
                </span>
                <span className="text-base font-normal text-coustomGrayColors">
                  Clubs
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <img src={icon3} className="w-12 h-12" alt="Event Bookings" />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-[30px] font-bold text-coustomZinkColors">
                  828,867
                </span>
                <span className="text-base font-normal text-coustomGrayColors">
                  Event Bookings
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <img src={icon4} className="w-12 h-12" alt="Payments" />
              <div className="flex flex-col ml-4 space-y-1">
                <span className="text-[30px] font-bold text-coustomZinkColors">
                  1,926,436
                </span>
                <span className="text-base font-normal text-coustomGrayColors">
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
