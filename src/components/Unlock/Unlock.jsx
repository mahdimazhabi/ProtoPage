import Img from "../../assets/Imgs/Unlock/image.png";

const Unlock = () => {
  return (
    <section className="mt-11">
      <div className=" flex justify-between items-center  px-[144px]">
        <div>
          <img src={Img} alt="#" className="w-[442px] " />
        </div>
        <div className="w-[661px]">
          <h1 className="text-coustomZinkColors font-semibold text-4xl">
            The unseen of spending three{" "}
            <span className="block">years at Pixelgrade </span>
          </h1>
          <p className="text-coustomGrayColors text-sm w-[601px] mt-4">
            When joining the JustGo Community, your success becomes our success.
            In other words, our Customer Success team will be on hand from day
            one to ensure we understand your requirements, share your goals and
            work with you for a smooth adoption of our software.
          </p>
          <button className="w-[151px] h-[52px] bg-coustomGreenColors text-coustomwhiteColors mt-8 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
