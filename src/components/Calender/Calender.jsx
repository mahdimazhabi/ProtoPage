import img from "../../assets/Imgs/Calender/image.png";
const Calender = () => {
  return (
    <section className="mt-12">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center text-center lg:text-left px-5 lg:px-[144px]">
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <img
            src={img}
            alt="#"
            className="w-[80%] sm:w-[442px] mx-auto lg:mx-0"
          />
        </div>
        <div className="w-full lg:w-[661px]">
          <h1 className="text-coustomZinkColors font-semibold text-2xl sm:text-3xl lg:text-4xl">
            How to design your site footer like we did
          </h1>
          <p className="text-coustomGrayColors text-sm sm:text-base w-full sm:w-[601px] mx-auto lg:mx-0 mt-4">
            One event calendar shared across National, Regional and Club events
            to simplify your event experience. Allowing you to create waiting
            lists, share data capture, issue credential for course completion,
            apply smart purchasing rules and much more.
          </p>
          <button className="w-[151px] h-[52px] bg-coustomGreenColors text-coustomwhiteColors mt-8 rounded mx-auto lg:mx-0">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calender;
