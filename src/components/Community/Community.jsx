import icon1 from "../../assets/Imgs/Frame/icon1.png";
import icon2 from "../../assets/Imgs/Frame/icon2.png";
import icon3 from "../../assets/Imgs/Frame/icon3.png";

const Community = () => {
  return (
    <section className="mt-32 mb-11">
      <div>
        <div className="mb-4">
          <h1 className=" text-coustomZinkColors text-center text-4xl  ">
            Manage your entire community{" "}
            <span className="block">in a single system</span>
          </h1>
          <p className="text-coustomGrayColors text-center text-base mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex justify-center space-x-[127.5px]">
          {/* Membership Organisations */}
          <div className="w-[251px]  py-6 px-1  rounded-lg shadow">
            <div className="flex justify-center mb-4">
              <img
                src={icon1}
                alt="Membership Organisations"
                className="w-[65px] h-[56px]"
              />
            </div>
            <h2 className="text-2xl  text-center text-coustomZinkColors font-bold">
              Membership Organisations
            </h2>
            <p className="text-gray-500 text-center mt-2">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>

          {/* National Associations */}
          <div className="w-[251px] py-6 px-1  rounded-lg shadow">
            <div className="flex justify-center mb-4">
              <img
                src={icon2}
                alt="National Associations"
                className="w-[65px] h-[56px]"
              />
            </div>
            <h2 className="text-2xl  text-center text-coustomZinkColors font-bold">
              National <span className="block">Associations</span>
            </h2>
            <p className="text-gray-500 text-center mt-2">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>

          {/* Clubs And Groups */}
          <div className="w-[251px] py-6 px-1  rounded-lg shadow">
            <div className="flex justify-center mb-4">
              <img
                src={icon3}
                alt="Clubs And Groups"
                className="w-[65px] h-[56px]"
              />
            </div>
            <h2 className="text-2xl  text-center text-coustomZinkColors font-bold">
              Clubs <span className="block">And Groups</span>
            </h2>
            <p className="text-gray-500 text-center mt-2">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
