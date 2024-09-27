import img from "../../assets/Imgs/Calender/image.png";
const Calender = () => {
  return (
    <section className="mt-12">
      <div className=" flex justify-between items-center  px-[144px]">
        <div>
          <img src={img} alt="#" className="w-[442px] " />
        </div>
        <div className="w-[661px]">
          <h1 className="text-coustomZinkColors font-semibold text-4xl">
            How to design your site footer like we did
          </h1>
          <p className="text-coustomGrayColors text-sm w-[601px] mt-4">
            One event calendar shared across National, Regional and Club events
            to simplify your event experience. Allowing you to create waiting
            lists, share data capture, issue credential for course completion,
            apply smart purchasing rules and much more.
          </p>
          <button className="w-[151px] h-[52px] bg-coustomGreenColors text-coustomwhiteColors mt-8 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calender;
