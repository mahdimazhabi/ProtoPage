import logo1 from "../../assets/Imgs/Our Clients/logo1.png";
import logo2 from "../../assets/Imgs/Our Clients/logo2.png";
import logo3 from "../../assets/Imgs/Our Clients/logo3.png";
import logo4 from "../../assets/Imgs/Our Clients/logo4.png";
import logo5 from "../../assets/Imgs/Our Clients/logo5.png";
import logo6 from "../../assets/Imgs/Our Clients/logo6.png";
import logo7 from "../../assets/Imgs/Our Clients/logo7.png";

const Partner = () => {
  const Clients = [
    { id: 1, img: logo1 },
    { id: 2, img: logo2 },
    { id: 3, img: logo3 },
    { id: 4, img: logo4 },
    { id: 5, img: logo5 },
    { id: 6, img: logo6 },
    { id: 7, img: logo7 },
  ];

  return (
    <section>
      <div className="mt-10">
        <div className="text-center">
          <h1 className="text-coustomZinkColors text-4xl mb-2 font-semibold">
            Our Clients
          </h1>
          <span className="text-coustomGrayColors text-base">
            We have been working with some Fortune 500+ clients
          </span>
        </div>
        <div className="grid grid-cols-3 gap-y-8  sm:grid-cols-3 lg:flex justify-center items-center  mt-8">
          {Clients.map((client) => (
            <img
              key={client.id}
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:w-12 lg:h-12"
              src={client.img}
              alt={`Client ${client.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
