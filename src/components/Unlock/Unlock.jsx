import Img from "../../assets/Imgs/Unlock/image.png";

const Unlock = () => {
  return (
    <section className="mt-11">
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left lg:px-[144px]">
        <div className="w-full lg:w-auto mb-6 lg:mb-0">
          <img
            src={Img}
            alt="#"
            className="w-[90%] sm:w-[442px] mx-auto lg:mx-0"
          />
        </div>
        <div className="w-full lg:w-[661px] text-center lg:text-left">
          <h1 className="text-coustomZinkColors font-semibold text-2xl sm:text-3xl lg:text-4xl">
            The unseen of spending three{" "}
            <span className="block">years at Pixelgrade </span>
          </h1>
          <p className="text-coustomGrayColors text-sm sm:text-base mt-4 px-4 sm:px-0 lg:w-[601px]">
            When joining the JustGo Community, your success becomes our success.
            In other words, our Customer Success team will be on hand from day
            one to ensure we understand your requirements, share your goals and
            work with you for a smooth adoption of our software.
          </p>
          <button className="w-[151px] h-[52px] bg-coustomGreenColors text-coustomwhiteColors mt-8 rounded mx-auto lg:mx-0">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
