import Img from "../../assets/Imgs/Hero/image.png";

const Hero = () => {
  return (
    <section className="bg-coustomwhiteColors w-full ">
      <div className="lg:flex flex-a justify-between items-center px-10 lg:px-[144px] py-[96px]">
        <div>
          <img src={Img} alt="Hero" className="w-[391px] h-[407px]" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-coustomZinkColors text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] mb-4 md:mt-4 font-semibold">
            Lessons and insights{" "}
            <span className="block text-coustomGreenColors">from 8 years</span>
          </h1>

          <span className="block text-coustomGrayColors font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
            Where to grow your business as a photographer: site or social media?
          </span>

          <button className="w-[128px] h-[52px] mt-8 text-white bg-coustomGreenColors rounded">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
