import Img from "../../assets/Imgs/Hero/image.png";

const Hero = () => {
  return (
    <section className="bg-coustomwhiteColors w-full ">
      <div className="flex justify-between items-center px-[144px] py-[96px]">
        <div>
          <h1 className="text-coustomZinkColors text-[64px] mb-4 font-semibold">
            Lessons and insights{" "}
            <span className="block text-coustomGreenColors">from 8 years</span>
          </h1>
          <span className="  block text-coustomGrayColors font-normal text-[16px]">
            Where to grow your business as a photographer: site or social media?
          </span>
          <button className="w-[128px] h-[52px] mt-8 text-white bg-coustomGreenColors rounded">
            Register
          </button>
        </div>
        <div>
          <img src={Img} alt="Hero" className="w-[391px] h-[407px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
